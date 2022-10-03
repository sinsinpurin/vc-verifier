import { verifyJWTVC } from "./credentials";
import { Express } from "express";

export const echo = (app: Express) => {
    app.get("/", function (req, res) {
        res.send("Hello World!");
    });
};

export const verifyApi = (app: Express) => {
    app.post("/credentials/verify", async (req, res) => {
        const vc = req.body.vc;
        const result = await verifyJWTVC(vc);
        res.send(result);
    });
};

export const APIStart = (app: Express) => {
    echo(app);
    verifyApi(app);
};
