const main = () => {
        const nmLine = lines[0].split(' ')
        const N = Number(nmLine[0])
        const M = Number(nmLine[1])
        const opHands = lines[1].split('')
        const G = 0
        const C = 2
        const P = 5
        let gcount = 0
        let ccount = 0
        let pcount = 0
        let win = 0
        for (hand of opHands) {
            if (hand === "G") {
                gcount++
            } else if (hand === "C") {
                ccount++
            } else {
                pcount++
            }
        }
        //iはパーを出せる数、jはチョキを出せる数
        //(opHands.length - i - j) がグーを出す数になる
        for (i = 0; i <= opHands.length; i++) {
            for (j = 0; j <= opHands.length - i; j++) {
                if (i * P + j * C === M) {
                    //それぞれを最大限勝てるようにする、超えてしまうと勝てる手がなくなる。
                    const pwin = Math.min(ccount, opHands.length - i - j) + Math.min(pcount, j) + Math.min(gcount, i)
                    win = Math.max(win, pwin)
                }
            }
        }
        console.log(win)
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