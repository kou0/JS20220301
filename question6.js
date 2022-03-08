const main = () => {
        //一行目取得
        const nmLine = lines[0].split(' ')
        const N = Number(nmLine[0])
        const M = Number(nmLine[1])
        let chair = Array(N).fill(false)
        for (i = 1; i <= M; i++) {
            //一行目以外取得
            const groupLine = lines[i].split(' ')
            const peopleNum = Number(groupLine[0])
            const chairNum = Number(groupLine[1])
                //江戸っ子フラグ
            let isDup = false
            const prechair = chair.concat()
            for (j = chairNum; j < chairNum + peopleNum; j++) {
                //値が席数を超えないようにしなくちゃいけないんだった
                const k = (j - 1) % N
                if (prechair[k]) {
                    isDup = true
                    break;
                }
                prechair[k] = true
            }
            if (!isDup) {
                chair = prechair.concat();
            }
        }
        console.log(chair.filter((x) => {
            return x
        }).length)
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