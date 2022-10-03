export const DID = "did:ion:EiClkZMDxPKqC9c-umQfTkR8vvZ9JPhl_xLDI9Nfk38w5w";
export const didDocument = {
    id: "did:ion:EiClkZMDxPKqC9c-umQfTkR8vvZ9JPhl_xLDI9Nfk38w5w",
    "@context": [
        "https://www.w3.org/ns/did/v1",
        {
            "@base": "did:ion:EiClkZMDxPKqC9c-umQfTkR8vvZ9JPhl_xLDI9Nfk38w5w",
        },
    ],
    service: [
        {
            id: "#linkedin",
            type: "linkedin",
            serviceEndpoint: "linkedin.com/in/henry-tsai-6b884014",
        },
        {
            id: "#github",
            type: "github",
            serviceEndpoint: "github.com/thehenrytsai",
        },
    ],
    verificationMethod: [
        {
            id: "#someKeyId",
            controller:
                "did:ion:EiClkZMDxPKqC9c-umQfTkR8vvZ9JPhl_xLDI9Nfk38w5w",
            type: "EcdsaSecp256k1VerificationKey2019",
            publicKeyJwk: {
                kty: "EC",
                crv: "secp256k1",
                x: "WfY7Px6AgH6x-_dgAoRbg8weYRJA36ON-gQiFnETrqw",
                y: "IzFx3BUGztK0cyDStiunXbrZYYTtKbOUzx16SUK0sAY",
            },
        },
    ],
    authentication: ["#someKeyId"],
};

export const vc =
    "eyJhbGciOiJFUzI1NksiLCJraWQiOiJkaWQ6d2ViOnZjLmRpZGRjLmNvI2Y2MmQwNWZhMDE3ZDRiYTNhNjIzMzVhNjIxZjJkZjI0dmNTaWduaW5nS2V5LTg4Y2QwIiwidHlwIjoiSldUIn0.eyJ2YyI6eyJAY29udGV4dCI6WyJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy92MSJdLCJ0eXBlIjpbIlZlcmlmaWFibGVDcmVkZW50aWFsIiwiRElEQ01lbWJlckNyZWRlbnRpYWwiXSwiY3JlZGVudGlhbFN1YmplY3QiOnsiZW1haWwiOiJ0dXNhbmNoNkBnbWFpbC5jb20iLCJuYW1lIjoic2luc2lucHVyaW4ifSwiY3JlZGVudGlhbFN0YXR1cyI6eyJpZCI6InVybjp1dWlkOjhhMTk5N2Q0LTNlNzktNGJmZi1hMTkxLTA4MzgyOTkyNDU4ZT9iaXQtaW5kZXg9ODAiLCJ0eXBlIjoiUmV2b2NhdGlvbkxpc3QyMDIxU3RhdHVzIiwic3RhdHVzTGlzdEluZGV4Ijo4MCwic3RhdHVzTGlzdENyZWRlbnRpYWwiOiJkaWQ6d2ViOnZjLmRpZGRjLmNvP3NlcnZpY2U9SWRlbnRpdHlIdWImcXVlcmllcz1XM3NpYldWMGFHOWtJam9pUTI5c2JHVmpkR2x2Ym5OUmRXVnllU0lzSW5OamFHVnRZU0k2SW1oMGRIQnpPaTh2ZHpOcFpDNXZjbWN2ZG1NdGMzUmhkSFZ6TFd4cGMzUXRNakF5TVM5Mk1TSXNJbTlpYW1WamRFbGtJam9pT0dFeE9UazNaRFF0TTJVM09TMDBZbVptTFdFeE9URXRNRGd6T0RJNU9USTBOVGhsSW4xZCJ9LCJleGNoYW5nZVNlcnZpY2UiOnsiaWQiOiJodHRwczovL2JldGEuZGlkLm1zaWRlbnRpdHkuY29tL3YxLjAvdGVuYW50cy9iOWE4NGViOC1hODg4LTRmNDEtYmI3NS00MzQ0N2UzNjQ4NmEvdmVyaWZpYWJsZUNyZWRlbnRpYWxzL2V4Y2hhbmdlIiwidHlwZSI6IlBvcnRhYmxlSWRlbnRpdHlDYXJkU2VydmljZUV4Y2hhbmdlMjAyMCJ9fSwianRpIjoidXJuOnBpYzo4OTNjNTFhMGQ1OTA0ZmU5OWU0ODMyOWRmNjZjOWJlMCIsImlzcyI6ImRpZDp3ZWI6dmMuZGlkZGMuY28iLCJzdWIiOiJkaWQ6aW9uOkVpQU1KUjZ0UFA0X010dWM0cjB1WlU3Y0RTeU5zampTV2hFeE9HYWtLaUxZZEE6ZXlKa1pXeDBZU0k2ZXlKd1lYUmphR1Z6SWpwYmV5SmhZM1JwYjI0aU9pSnlaWEJzWVdObElpd2laRzlqZFcxbGJuUWlPbnNpY0hWaWJHbGpTMlY1Y3lJNlczc2lhV1FpT2lKemFXZHVhVzVuUzJWNUlpd2ljSFZpYkdsalMyVjVTbmRySWpwN0ltTnlkaUk2SW5ObFkzQXlOVFpyTVNJc0ltdDBlU0k2SWtWRElpd2llQ0k2SWs5MGRIcEpOMFZFWTBwM1EyTlRiRFozZVRrMFVqTk1iazFpUmpacVJHb3dPREZUWlRseVJEZzNTbGtpTENKNUlqb2lSM0JPWVVGUFgzcFBlbkZvWm5CaWNETnhlRGhFTVZaTGFHRlZSbXRKY1VWTU15MU5XVE5pVXpsWE1DSjlMQ0p3ZFhKd2IzTmxjeUk2V3lKaGRYUm9aVzUwYVdOaGRHbHZiaUpkTENKMGVYQmxJam9pUldOa2MyRlRaV053TWpVMmF6RldaWEpwWm1sallYUnBiMjVMWlhreU1ERTVJbjFkZlgxZExDSjFjR1JoZEdWRGIyMXRhWFJ0Wlc1MElqb2lSV2xEWW05VVFWOXpSM0pHWVRCaFlYWmhSbXhGVkdaelVISXpjRGxtVTBkNFJFVnRVbXR1TWxsT01FVTFRU0o5TENKemRXWm1hWGhFWVhSaElqcDdJbVJsYkhSaFNHRnphQ0k2SWtWcFFtMXRXR1pqTW5GTlkzaG5WMW93ZVVzemJqQkVWR1kyTWpJdFMxYzJVM05ZTUdwNWJEWkpSa3hrU21jaUxDSnlaV052ZG1WeWVVTnZiVzFwZEcxbGJuUWlPaUpGYVVOaWIxUkJYM05IY2taaE1HRmhkbUZHYkVWVVpuTlFjak53T1daVFIzaEVSVzFTYTI0eVdVNHdSVFZCSW4xOSIsImlhdCI6MTY2NDYzNjM0NCwiZXhwIjoxNjY3MjI4MzQ0fQ.bdpL9KA9lZzX4ES9dL2llnyoaNNvsUKTsjTuqFUN9qebmOt-KvVDqC3ZjdIeALqqlKtHLcBALEYP2b-yQGuwEA";
