const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};



function decode(expr) {

    let ar = [];
    flag = 0;
    while (flag <= expr.length){
        ar.push(expr.substring(flag, flag+10));
        flag += 10;
    }
    let m = '';
    for (str of ar){
        if (str == '**********'){
            m += ' ';
        }
        else {
            if (str.indexOf('1') != -1){
                let morse = str.slice(str.indexOf('1'), str.lenght);
                let newStr = '';
                for (let i = 0; i <= morse.length; i +=2){
                    if (morse.substring(i, i+2) == '10' ){
                        newStr += '.';
                    }
                    else if (morse.substring(i, i+2) == '11' ){
                        newStr += '-';
                    }
                }
                m += MORSE_TABLE[newStr];
            }
        }
    }
    return m
}

module.exports = {
    decode
}
