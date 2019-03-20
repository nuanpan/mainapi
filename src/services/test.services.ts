import { readFileSync } from "fs";
import * as api from "../plugins/api/api";

export const FindingForX = () => {
    let x = 3;
    for (let i = 1; i <= 4; i++) {
        x = x + (2 * i);
    }
    return x;
}

export const FindingForY = () => {
    return 99 - (10 * 2) - 24;
}

export const FindingForAnotherX = () => {
    let x = "5";
    for (let i = 2; i <= 5; i++) {
        x = `${i}${x}`;
    }
    return x
}

export const ReadFile = () => {
    // let data;
    // console.log(__dirname,__filename);
    // let data = readFileSync("../plugins/api/data.txt");
    // console.log(data);
    // return data;
    let data = api.fx();
    return data;
}