export class BizarreCalendar {
    // 0001年1月1日から経過した日数
    elapsedDays: number

    constructor(
        public daysInYear: number,
        public daysInMonth: number,
        public daysInWeek: number
    ) { }

    // 日付を登録する。戻り値はその日付が存在するかどうか
    setDate(yyyy_mm_dd: string) {
        const [year, month, date] = yyyy_mm_dd.split('-').map(v => +v)
        const monthsInYear = this.getMonthsFromYear(year) - this.getMonthsFromYear(year - 1)

        this.elapsedDays = (this.getMonthsFromYear(year - 1) + (month - 1)) * this.daysInMonth + (date - 1)

        return !(monthsInYear < month || this.daysInMonth < date)
    }

    // その年にある月の数を返す
    getMonthsFromYear(year: number) {
        return year * this.daysInYear / this.daysInMonth | 0
    }

    // 登録した日付の曜日を返す
    getDay() {
        return String.fromCharCode(65 + this.elapsedDays % this.daysInWeek)
    }
}