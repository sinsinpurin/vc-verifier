export const decodeJWTString = (jwtString: string) => {
    const [headerBase64, payloadBase64, signatureBase64] = jwtString.split(".");
    const header = JSON.parse(Buffer.from(headerBase64, "base64").toString());
    const payload = JSON.parse(Buffer.from(payloadBase64, "base64").toString());
    return { header, payload };
};
