import {
    CollectionReference,
    DocumentData,
    getDocs,
    query,
    where,
    WhereFilterOp,
} from "firebase/firestore";

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
