import { jwtVerify } from "jose";
import { getDIDDocumentPublicKeyJWK } from "./utils/did";
import { decodeJWTString } from "./utils/jwt";

export const verifyJWTVC = async (vc: string): Promise<boolean> => {
    const { header } = decodeJWTString(vc);
    const publicKeyJWK = await getDIDDocumentPublicKeyJWK(header.kid);
    const result = await jwtVerify(vc, publicKeyJWK);
    return result ? true : false;
};
