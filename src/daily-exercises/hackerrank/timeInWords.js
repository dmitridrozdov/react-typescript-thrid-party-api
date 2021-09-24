let a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen ']
let b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety']

const inWords = (num) => {
    if ((num = num.toString()).length > 9) return 'overflow'
    let n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/)
    if (!n) return 
    let str = ''
    str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : ''
    str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : ''
    str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : ''
    str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : ''
    str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) : ''
    return str
}

const timeInWords = (h, m) => {
    switch(true) {
        case (m === 0): return inWords(h) + 'o\' clock'
        case (m === 15): return 'quarter past ' + inWords(h)
        case (m === 30): return 'half past ' + inWords(h)
        case (m === 1): return inWords(m) + 'minute past ' + inWords(h)
        case (m === 45): return 'quarter to ' + inWords(h + 1)
        case (m === 60): return inWords(h + 1) + 'o\' clock'
        case (m < 30): return inWords(m) + 'minutes past ' + inWords(h)
        case (m > 30): return inWords(60 - m) + 'minutes to ' + inWords(h + 1)
        default: return 'undefined'
      }
}

const testCases = [
    [5, 0], [5, 15], [5, 30], [5, 1], [5, 10], [5, 45],
    [5, 40], [5, 47], [5, 28], [5, 60]
]

testCases.forEach((time) => console.log(timeInWords(time[0], time[1])))