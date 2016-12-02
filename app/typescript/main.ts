// TypeScriptを使用
// コードは /app/typetcript/ にあります

import { BizarreCalendar } from "./BizarreCalendar"

function main(argv: string[]) {
    const [daysInYear, daysInMonth, daysInWeek, yyyy_mm_dd] = argv
    const date = new BizarreCalendar(+daysInYear, +daysInMonth, +daysInWeek)

    // 存在しない日付の場合は-1を出力して終了する
    if (date.setDate(yyyy_mm_dd) === false) {
        console.log(-1)
        return
    }

    console.log(date.getDay())
}

export = main
