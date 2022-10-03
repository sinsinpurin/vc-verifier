import express from "express";
import * as dotenv from "dotenv";

import { program } from "commander";
import { APIStart } from "./api";

dotenv.config();

program.option("-p, --port <type>", "port number");
program.parse();
const options = program.opts();

const startApp = async () => {
    const app = express();
    APIStart(app);
    app.listen(options.port, () => {
        console.log(`Server started on port ${options.port}`);
    });
};

startApp();
