import { useState, useEffect } from "react";
import { getDownloadURL, getStorage, listAll, ref } from "firebase/storage";
import { IFirebaseImage } from "../types";

export const useFirebaseImages = (folderName: string) => {
    const storage = getStorage();
    const pathReference = ref(storage, folderName);
    const [images, setImages] = useState<IFirebaseImage[]>([]);

    useEffect(() => {
        (async () => {
            await getImages();
        })();
    }, []);

    const getImages = async () => {
        const imageRefs = await listAll(pathReference);
        const imageData = await Promise.all(
            imageRefs.items.map(async (imageRef) => {
                const name = imageRef.name.replace(".PNG", "");
                const url = await getDownloadURL(imageRef);

                return {
                    name,
                    url,
                };
            })
        );

        setImages(imageData);
    };

    return { getImages, images };
};
