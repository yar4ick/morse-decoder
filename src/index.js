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
    '*' : ' ',
};

function decode(expr) {
    let letters = {};
    let string = '';
    let tempArr = [];
    const MORSIANKA = {
        '10' : '.',
        '11' : '-',
        '00' : '=',
        '**' : '**',
    }

    for (let i = 0, j = 0; i < expr.length; i += 2)
    {
        if (MORSIANKA[expr[i] + expr[i+1]] === '**' && tempArr[j-1] != '**')
        {
            tempArr[j++] = MORSIANKA[expr[i] + expr[i+1]]
        }
        else if (MORSIANKA[expr[i] + expr[i+1]] != '**')
        {
            tempArr[j++] = MORSIANKA[expr[i] + expr[i+1]]
        }
    }

    let str = 0

    tempArr.forEach((element, index) => {
        if (element != "=" && element != "**")
        {
            if (letters[str] != undefined)
            {
                letters[str] += element
            }else
            {
                letters[str] = element
            }
        }
        else if (element === '**')
        {
            letters[++str] = '*'
            str++
        }
        else if (element === '=' || index === tempArr.length - 1)
        {
            str++;
        } 
    } )

    // console.log(letters['0'].length % 5)

    for (let key in letters)
    {
        if (letters[key].length > 5)
        {
            let ltr = letters[key].length % 5
            let tmp = ''
            
            if (ltr != 0)
            {
                for (let i = 0; i <= ltr - 1; i++)
                {
                    tmp += letters[key][i]
                }

                string += MORSE_TABLE[tmp]

                tmp = ''

                for (let i = ltr, k = 0; i <= letters[key].length; i++)
                {
                    tmp += letters[key][i];
                    k++;
    
                    if (k === 5)
                    {
                        string += MORSE_TABLE[tmp]
                        k = 0;
                        tmp = ''
                    }
                }
            }else
            {
                tmp = ''
                
                for (let i = 0, k = 0; i < letters[key].length; i++)
                {
                    tmp += letters[key][i];
                    k++;
    
                    if (k === 5)
                    {
                        string += MORSE_TABLE[tmp]
                        k = 0;
                        tmp = ''
                    }
                }
            }
        }
        else
        {
            string += MORSE_TABLE[letters[key]]
        }
    }

    return string;
}

module.exports = {
    decode
}