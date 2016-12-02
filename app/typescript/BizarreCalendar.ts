export class BizarreCalendar {
    daysInYear: number
    daysInMonth: number
    daysInWeek: number

    // 0001年1月1日から経過した日数
    elapsedDays: number

    constructor(year: number, month: number, week: number) {
        this.daysInYear =  year
        this.daysInMonth =  month
        this.daysInWeek =  week
    }

    // 日付を登録する
    // 戻り値はその日付が存在するかどうか
    setDate(yyyy_mm_dd: string) {
        const [year, month, date] = yyyy_mm_dd.split('-').map(v => +v)
        const monthsInYear = this.getElapsedMonths(year + 1) - this.getElapsedMonths(year)

        this.elapsedDays = this.getElapsedMonths(year, month) * this.daysInMonth + (date - 1)

        return !(monthsInYear < month || this.daysInMonth < date)
    }

    // 0001年1月から経過した月数を返す
    getElapsedMonths(year: number, month = 1) {
        return (year - 1) * this.daysInYear / this.daysInMonth + (month - 1) | 0
    }

    // 登録した日付の曜日を返す
    getDay() {
        return String.fromCharCode(65 + this.elapsedDays % this.daysInWeek)
    }
}
