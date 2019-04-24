function validateColor(hex) {
    let valideSymbols = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    let valideHex = [];
    let negativeHex = [];

    if (Array.isArray(hex)) {
        for (let i = 0; i < hex.length; i++) {
            valideHex.push(hex[i].substring(1).toUpperCase());
        }
    } else {
        valideHex.push(hex.substring(1).toUpperCase());
    }

    for (let i = 0; i < valideHex.length; i++) {
        for (let j = 0; j < valideHex[i].length; j++) {
            let string = valideHex[i];
            let symb = valideHex[i][j];
            if (!valideSymbols.includes(symb) || string.length != 6 && string.length != 3) {
                valideHex.splice(i, 1);
                i--;
            }
        }
    }

    for (let i = 0; i < valideHex.length; i++) {
        let string = valideHex[i];
        if (string.length === 3) {
            valideHex[i] = string[0] + string[0] + string[1] + string[1] + string[2] + string[2];
        }
    }

    for (let i = 0; i < valideHex.length; i++) {
        for (let j = 0; j < valideHex[i].length; j++) {
            let negativeObj = {
                '0': 'F',
                '1': 'E',
                '2': 'D',
                '3': 'C',
                '4': 'B',
                '5': 'A',
                '6': '9',
                '7': '8',
                '8': '7',
                '9': '6',
                'A': '5',
                'B': '4',
                'C': '3',
                'D': '2',
                'E': '1',
                'F': '0'
            }
            valideHex[i] = valideHex[i].replace(valideHex[i][j], negativeObj[valideHex[i][j]]);
            negativeHex[i] = '#' + valideHex[i];
        }
    }
    console.log(negativeHex);
};

validateColor(['#000', '#ppp', '#ffff']);
