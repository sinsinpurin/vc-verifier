export interface PublicKeyJwk {
    kty: string;
    crv: string;
    x: string;
    y: string;
}

export interface DIDDocument {
    "@context": [string | object];
    id: string;
    verificationMethod: [
        {
            id: string;
            controller: string;
            type: string;
            publicKeyJwk: PublicKeyJwk;
        },
    ];
    authentication?: string[];
    assertionMethod?: string[];
    capabilityInvocation?: string[];
    capabilityDelegation?: string[];
    service: [
        {
            id: string;
            type: string;
            serviceEndpoint: string;
        },
    ];
}
