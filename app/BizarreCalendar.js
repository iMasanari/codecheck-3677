"use strict";
var BizarreCalendar = (function () {
    function BizarreCalendar(daysInYear, daysInMonth, daysInWeek) {
        this.daysInYear = daysInYear;
        this.daysInMonth = daysInMonth;
        this.daysInWeek = daysInWeek;
    }
    // 日付を登録する。戻り値はその日付が存在するかどうか
    BizarreCalendar.prototype.setDate = function (yyyy_mm_dd) {
        var _a = yyyy_mm_dd.split('-').map(function (v) { return +v; }), year = _a[0], month = _a[1], date = _a[2];
        var monthsInYear = this.getMonthsFromYear(year) - this.getMonthsFromYear(year - 1);
        this.elapsedDays = (this.getMonthsFromYear(year - 1) + (month - 1)) * this.daysInMonth + (date - 1);
        return !(monthsInYear < month || this.daysInMonth < date);
    };
    // その年にある月の数を返す
    BizarreCalendar.prototype.getMonthsFromYear = function (year) {
        return year * this.daysInYear / this.daysInMonth | 0;
    };
    // 登録した日付の曜日を返す
    BizarreCalendar.prototype.getDay = function () {
        return String.fromCharCode(65 + this.elapsedDays % this.daysInWeek);
    };
    return BizarreCalendar;
}());
exports.BizarreCalendar = BizarreCalendar;
