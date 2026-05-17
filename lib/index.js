/**
 * Get the output of a process.
 * @name procOutput
 * @function
 * @param {Process} proc The process object.
 * @param {Function} cb The callback function.
 * @returns {Process} The process object.
 */
export default function procOutput(proc, cb) {
    let stdout = "";
    let stderr = "";

    proc.on("error", err => {
        cb(err);
    });

    proc.stdout.on("data", chunk => stdout += chunk);
    proc.stderr.on("data", chunk => stderr += chunk);
    proc.on("close", code => cb(null, stdout, stderr, code));

    return proc;
}
