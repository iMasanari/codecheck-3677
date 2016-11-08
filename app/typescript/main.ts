// TypeScriptを使用

import {BizarreCalendar} from "./BizarreCalendar"

function main(argv: string[]) {
    const daysInYear = +argv[0]
    const daysInMonth = +argv[1]
    const daysInWeek = +argv[2]
    const yyyy_mm_dd = argv[3]

    const date = new BizarreCalendar(daysInYear, daysInMonth, daysInWeek)

    if (date.setDate(yyyy_mm_dd) === false) {
        console.log(-1)
        return
    }

    console.log(date.getDay())
}

export = main
