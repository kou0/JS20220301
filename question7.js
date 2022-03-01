const main = () => {
        const nmLine = lines[0].split(' ')
        const N = Number(nmLine[0])
        const M = Number(nmLine[1])
        const opHands = lines[1].split('')
        let ccount = 0
        let pcount = 0
        let gcount = 0
        let win = 0
        for (hand of opHands) {
            if (hand === "C") {
                ccount++
            } else if (hand === "P") {
                pcount++
            } else {
                gcount++
            }
        }
        for (i = pcount; i > 0; i--) {
            for (j = 0; j <= gcount; j++) {
                if ((i * 2) + (j * 5) === M) {
                    win = ccount + i + j
                    break;
                }
            }
            console.log(win)
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