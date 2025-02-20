const readline = require("readline");

function input(answer) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    })

    return new Promise((resolve) => {
            rl.question(answer + ' ', (resposta) => {
                rl.close()
                resolve(resposta)
            })
    })
}

const clear = () => {
    readline.moveCursor(process.stdout,0,-20);
    readline.clearScreenDown(process.stdout)
}

module.exports = { input, clear };