export const getErrorMessages = (errors: any, fieldName: string) => {
    return errors
        .filter((error: any) => error.path.includes(fieldName))
        .map((error: any) => error.message);
};
