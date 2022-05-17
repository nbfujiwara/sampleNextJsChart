export default class UtilDate {
  public static format(date: Date, format: string): string {
    if (!date) {
      return ''
    }
    let ret = format
    if (format.includes('week')) {
      ret = ret.replace(/week/, UtilDate.getWeekShortNameByNum(date.getDay()))
    }
    if (format.includes('w')) {
      ret = ret.replace(/w/, date.getDay().toString())
    }
    if (format.includes('Y')) {
      ret = ret.replace(/Y/, date.getFullYear().toString())
    }
    if (format.includes('m')) {
      ret = ret.replace(/m/, UtilDate.zeroPadding((date.getMonth() + 1).toString(), 2))
    }
    if (format.includes('n')) {
      ret = ret.replace(/n/, (date.getMonth() + 1).toString())
    }
    if (format.includes('d')) {
      ret = ret.replace(/d/, UtilDate.zeroPadding(date.getDate().toString(), 2))
    }
    if (format.includes('j')) {
      ret = ret.replace(/j/, date.getDate().toString())
    }
    if (format.includes('H')) {
      ret = ret.replace(/H/, UtilDate.zeroPadding(date.getHours().toString(), 2))
    }
    if (format.includes('i')) {
      ret = ret.replace(/i/, UtilDate.zeroPadding(date.getMinutes().toString(), 2))
    }
    if (format.includes('s')) {
      ret = ret.replace(/s/, UtilDate.zeroPadding(date.getSeconds().toString(), 2))
    }
    return ret
  }

  public static ymd(date: Date | number) {
    if (date instanceof Date) {
      return UtilDate.format(date, 'Y-m-d')
    } else {
      return UtilDate.format(new Date(date), 'Y-m-d')
    }
  }

  public static parse(str: string): Date {
    const tmp: any[] = str.split('-')
    if (tmp.length === 3) {
      return UtilDate.makeDate(tmp[0], tmp[1], tmp[2])
    }
    throw new Error('cannot parse to date ' + str)
  }

  private static makeDate(
    year: number | string,
    month: number | string,
    day: number | string,
  ): Date {
    return new Date(Number(year), Number(month) - 1, Number(day))
  }

  public static zeroPadding(num: string | number, len: number) {
    let numStr = String(num)
    for (let i = 0; i < len - 1; i++) {
      numStr = '0' + numStr
    }
    return numStr.slice(-len)
  }

  private static getWeekShortNameByNum(num: number): string {
    const weekNames = ['日', '月', '火', '水', '木', '金', '土']
    if (num >= weekNames.length) {
      return ''
    }
    return weekNames[num]
  }
}
