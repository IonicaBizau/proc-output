import { spawn } from "node:child_process";
import procOutput from "../lib/index.js";

let proc = spawn("ls");

procOutput(proc, (err, stdout, stderr, code) => {
    console.log(`Process ended with code: ${code}`);
    // => Process ended with code: 0
    console.log(err || stderr || stdout);
    // =>
    // example
    // lib
});
