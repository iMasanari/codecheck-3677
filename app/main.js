// TypeScriptを使用
"use strict";
var BizarreCalendar_1 = require("./BizarreCalendar");
function main(argv) {
    var daysInYear = +argv[0];
    var daysInMonth = +argv[1];
    var daysInWeek = +argv[2];
    var yyyy_mm_dd = argv[3];
    var date = new BizarreCalendar_1.BizarreCalendar(daysInYear, daysInMonth, daysInWeek);
    if (date.setDate(yyyy_mm_dd) === false) {
        console.log(-1);
        return;
    }
    console.log(date.getDay());
}
module.exports = main;
