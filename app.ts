import * as dotenv from "dotenv";
dotenv.config();

import { bootstrap } from "./bootstrap";


bootstrap(startUp);

function startUp() {
    console.log("Application is started");
    // get data from mongo
}