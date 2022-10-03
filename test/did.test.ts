import { resolveDID } from "../src/utils/did";
import { DID, didDocument } from "./fixture";

// resolve did
test("resolve DIDDocument", async () => {
    const result = await resolveDID(DID);
    expect(JSON.stringify(result.didDocument)).toBe(
        JSON.stringify(didDocument),
    );
});

test("resolve DIDDocument publicKey", async () => {
    const result = await resolveDID(DID);
    expect(result.didDocument.verificationMethod[0].publicKeyJwk).toEqual({
        kty: "EC",
        crv: "secp256k1",
        x: "WfY7Px6AgH6x-_dgAoRbg8weYRJA36ON-gQiFnETrqw",
        y: "IzFx3BUGztK0cyDStiunXbrZYYTtKbOUzx16SUK0sAY",
    });
});
