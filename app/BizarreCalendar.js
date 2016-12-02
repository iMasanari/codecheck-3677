"use strict";
var BizarreCalendar = (function () {
    function BizarreCalendar(year, month, week) {
        this.daysInYear = year;
        this.daysInMonth = month;
        this.daysInWeek = week;
    }
    // 日付を登録する
    // 戻り値はその日付が存在するかどうか
    BizarreCalendar.prototype.setDate = function (yyyy_mm_dd) {
        var _a = yyyy_mm_dd.split('-').map(function (v) { return +v; }), year = _a[0], month = _a[1], date = _a[2];
        var monthsInYear = this.getElapsedMonths(year + 1) - this.getElapsedMonths(year);
        this.elapsedDays = this.getElapsedMonths(year, month) * this.daysInMonth + (date - 1);
        return !(monthsInYear < month || this.daysInMonth < date);
    };
    // 0001年1月から経過した月数を返す
    BizarreCalendar.prototype.getElapsedMonths = function (year, month) {
        if (month === void 0) { month = 1; }
        return (year - 1) * this.daysInYear / this.daysInMonth + (month - 1) | 0;
    };
    // 登録した日付の曜日を返す
    BizarreCalendar.prototype.getDay = function () {
        return String.fromCharCode(65 + this.elapsedDays % this.daysInWeek);
    };
    return BizarreCalendar;
}());
exports.BizarreCalendar = BizarreCalendar;
