import {
    CollectionReference,
    DocumentData,
    getDocs,
    query,
    where,
    WhereFilterOp,
} from "firebase/firestore";
import { getDownloadURL, getStorage, listAll, ref } from "firebase/storage";
import { IFirebaseImage } from "../types";

export const getDocumentsWhere = async (
    collectionRef: CollectionReference<DocumentData>,
    getBy: string,
    operator: WhereFilterOp,
    name: string
) => {
    try {
        const response = query(collectionRef, where(getBy, operator, name));
        return (await getDocs(response)).docs.map((doc) => doc.data());
    } catch (e) {
        console.log(`Error getting docs where ${getBy} is ${name} ${e}`);
    }
    return null;
};

export const getFirebaseImages = async (
    folder: string,
    filename: string = ""
): Promise<IFirebaseImage[] | undefined> => {
    const storage = getStorage();
    const pathReference = ref(storage, `${folder}/${filename}`);

    try {
        const imageRefs = await listAll(pathReference);
        return await Promise.all(
            imageRefs.items.map(async (imageRef) => {
                const name = imageRef.name
                    .toLocaleLowerCase()
                    .replace(".png", "")
                    .replace(".jpg", "")
                    .replace(".jpeg", "");
                const url = await getDownloadURL(imageRef);

                return {
                    name,
                    url,
                };
            })
        );
    } catch (e) {
        console.log(e);
    }
};
