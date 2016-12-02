// TypeScriptを使用
// コードは /app/typetcript/ にあります
"use strict";
var BizarreCalendar_1 = require("./BizarreCalendar");
function main(argv) {
    var daysInYear = argv[0], daysInMonth = argv[1], daysInWeek = argv[2], yyyy_mm_dd = argv[3];
    var date = new BizarreCalendar_1.BizarreCalendar(+daysInYear, +daysInMonth, +daysInWeek);
    // 存在しない日付の場合は-1を出力して終了する
    if (date.setDate(yyyy_mm_dd) === false) {
        console.log(-1);
        return;
    }
    console.log(date.getDay());
}
module.exports = main;
