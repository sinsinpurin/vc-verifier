import { DIDDocument } from "../@types";
import { importJWK, JWK, KeyLike } from "jose";

const resolverBaseURL = "https://dev.uniresolver.io/1.0/identifiers/";

// resolve did
export const resolveDID = async (did: string) => {
    const response = await fetch(resolverBaseURL + did);
    const data = await response.json();
    return data;
};

export const getDIDDocument = async (did: string): Promise<DIDDocument> => {
    return (await resolveDID(did)).didDocument;
};

export const getDIDDocumentPublicKeyJWK = async (
    did: string,
): Promise<KeyLike | Uint8Array> => {
    const didDocument = await getDIDDocument(did);
    const publicKeyJWK = await importJWK(
        didDocument.verificationMethod[0].publicKeyJwk as JWK,
        "ES256K",
    );
    return publicKeyJWK;
};
