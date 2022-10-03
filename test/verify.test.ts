import { verifyJWTVC } from "../src/credentials";
import { vc } from "../test/fixture";
test("verify VC", async () => {
    const result = await verifyJWTVC(vc);
    expect(result).toBe(true);
});
