const main = () => {
        const N = lines[0]
        for (i = 1; i <= N; i++) {
            if (i % 15 === 0) {
                console.log("FizzBuzz")
            } else if (i % 5 === 0) {
                console.log("Buzz")
            } else if (i % 3 === 0) {
                console.log("Fizz")
            } else {
                console.log(i)
            }
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