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
    // write your solution here
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



    // tempArr.forEach((element, index) => {
    //     if (parseInt(element) > 0)
    //     {
    //         letter += MORSIANKA[element]

    //         if (index === tempArr.length - 1 || letter.length === 5)
    //         {
    //             // if (MORSE_TABLE[letter] != 'undefined') string += MORSE_TABLE[letter]
    //             string += MORSE_TABLE[letter];
    //             letter = '';
    //         }
    //     }
    //     else if (element === '**' && tempArr[index + 1] != '**')
    //     {
    //         string += " ";
    //     }
    //     else if (letter != '')
    //     {
    //         string += MORSE_TABLE[letter];
    //         letter = '';
    //     }
    // });

    // console.log(tempArr)
    // console.log(letters)
    // console.log(letters['0'].length)
    console.log(string)
    console.log("ed3ca775829b4b8c0e59620017bf2596b27d0c5cd3de8eac0a145c4f25b31a63e2ebf340c4335a826c443ecea6069f50a836fdc35cc6c2a94cdf5da0fb3b6acb")
    // console.log(letters['0'].length)
    // console.log(string);
    // console.log("hello world");
    // console.log("0e596200");
    // console.log("17bf2596");
}

// decode("1110101010101111");
// decode("00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010");
decode("00000000100000111010101010111100111011100000001011111110101011111010101010101010111111101010101111111111111110001110101010101010110011101010111111101000111011101111111111000000001010101010101111111110111010101010101111111111111111111111111110111111111111101010001110101000101011101010111111101010101011111111101110101010001110101010101111111111101010000011101011111111110011101110101010101000111011100000111010101010111100001110100000000010111111101000000000100000001011001110111011111111110000001011101111111110101010111010101010001110111010101010110010101110101011111110101010100011101010101010111110111111110000001011111010101010101011110000000010101011111100000000100011101010001010111010101011111010101011111111111100111011101010101011101010111110101011111010101010000000101111111110101010111111111010101000111011101010101011101010101110101011110000000010001110111000000000100000001011111010101011111111111110101010111111111000101011101010101010111111111100000010111111111010101010111111101010100010101110000011101000111011101010101111101010101000111011100011101110111010101000111011101010111111000000101111111111101010101011001110111000001110100010101110101010101000001110100000001011111111111100101011100011101010101010111100111010101110101010000000101100111011100011101010");