const main = () => {
        const line = lines[0].split(' ')
        console.log(line[0] + line[1])
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