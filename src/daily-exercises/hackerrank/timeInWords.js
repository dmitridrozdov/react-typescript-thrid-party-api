let a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen ']
let b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety']

const inWords = (num) => {
    if ((num = num.toString()).length > 9) return 'overflow'
    n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/)
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
    // if(m === 0) { return inWords(h) + 'o\' clock' }
    // else if(m === 15) { return 'quarter past ' + inWords(h) }
    // else if(m === 30) { return 'half past ' + inWords(h) }
    // return 'undefined'
    switch(m) {
        case 0: return inWords(h) + 'o\' clock'
        case 15: return 'quarter past ' + inWords(h)
        case 30: return 'half past ' + inWords(h)
        default: return 'undefined'
      }
}


const testCases = [[5, 0], [5, 15], [5, 30]]
testCases.forEach((time) => console.log(timeInWords(time[0], time[1])))