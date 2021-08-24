const MORSE_TABLE = {
'.-':      'A',
'-...':    'B',
'.--':     'W',
'--.':     'G',
'-..':     'D',
'.':       'E',
'...-':    'V',
'--..':    'Z',
'..':      'I',
'.---':    'J',
'-.-':     'K',
'.-..':    'L',
'--':      'M',
'-.':      'N',
'---':     'O',
'.--.':    'P',
'.-.':     'R',
'...':     'S',
'-':       'T',
'..-':     'U',
'..-.':    'F',
'....':    'H',
'-.-.':    'C',
'---.':    'Ö',
'----':    'CH',
'--.-':    'Q',
'--.--':   'Ñ',
'-.--':    'Y',
'-..-':    'X',
'..-..':   'É',
'..--':    'Ü',
'.-.-':    'Ä',
'.----':   '1',
'..---':   '2',
'...--':   '3',
'....-':   '4',
'.....':   '5',
'-....':   '6',
'--...':   '7',
'---..':   '8',
'----.':   '9',
'-----':   '0',
};

function decode(expr) {
let str = expr.slice(),
    resultArr = [];

for (let i = 0; i < str.length; i += 10) {
    let currStr = str.substring(i, i + 10);

    if (currStr.length < 10) {
        currStr.padStart(10, '0');
    } else if (currStr[0] == '*' || currStr[currStr.length - 1] == '*') {
        resultArr.push(' ')
    } else {
        resultArr.push(convertStringToMorseSign(currStr));
    }
}

function convertStringToMorseSign (str) {
    let currSign = [],
        dot = '.',
        dash = '-',
        space = ' ';

    for (let j = 0; j < str.length; j += 2) {
        if (`${str[j]}${str[j + 1]}` === '10') {
        currSign.push(dot);
        } else if (`${str[j]}${str[j + 1]}` == '11') {
        currSign.push(dash);
        } else if (`${str[j]}${str[j + 1]}` == '**') {
        currSign.push(space);
        } else {
        continue;
        }
    }

    currSign = currSign.join('').trim();
    return MORSE_TABLE[currSign];
}

return resultArr.join('').replace(/ +/g, ' ').trim().split(' ').join(' ').toLowerCase();
}

module.exports = {
    decode
}
