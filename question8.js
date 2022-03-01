const main = () => {
    const nmLine = lines[0].split(' ')
    const N = Number(nmLine[0])
    const M = Number(nmLine[1])
    const field = Array(M);
    let count = 0
    for (i = 0; i < M; i++) {
        field[i] = lines[i + 1].split(' ')
    }
    for (i = 0; i < M; i++) {
        for (j = 0; j < N; j++) {
            if (field[i][j] === '1') {
                walk(field, i, j)
                count++
            }
        }
    }
    console.log(count)
}
const walk = (field, i, j) => {
        field[i][j] = 0
        if (field[i - 1] && field[i - 1][j] === 1) {
            walk(field, i - 1, j)
        }
        if (field[i][j - 1] && field[i][j - 1] === 1) {
            walk(field, i, j - 1)
        }
        if (field[i + 1] && field[i + 1][j] === 1) {
            walk(field, i + 1, j)
        }
        if (field[i][j + 1] && field[i][j + 1] === 1) {
            walk(field, i, j + 1)
        }
    }
    /**
     * 標準入出力のための処理
     */
const reader = require('readline')
console.log("プログラムスタート")
process.stdin.resume()
process.stdin.setEncoding('utf8')
const rl = reader.createInterface({
    input: process.stdin,
    output: process.stdout
})
let lines = []
rl.on('line', (line) => {
    lines.push(line)
})
rl.on('close', main)