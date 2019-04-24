let valideSymbols = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
let valideHex = []
let negativeHex = []

// определяем тип передаваемых данных
// удаляем знак "#" и переводим в верхний регистр
// пушим результат в массив 'valideHex'
function validateColor(hex) {
    if (Array.isArray(hex)) {
        for (let i = 0; i < hex.length; i++) {
            valideHex.push(hex[i].substring(1).toUpperCase())
        }
    } else {
        valideHex.push(hex.substring(1).toUpperCase())
    }

// проверяем данные на валидность путём сравнивания с массивом валидных символов
// удаляем элементы, в которых присутствуют невалидные символы, либо длина которых превышает 6
    for (let i = 0; i < valideHex.length; i++) {
        for (let j = 0; j < valideHex[i].length; j++) {
            if (!valideSymbols.includes(valideHex[i][j].toLowerCase()) || valideHex[i].length > 6) {
                valideHex.splice(i, 1)
                i--
            }
        }
    }

// если длина строки == 3 - тогда дублируем каждый элемент
    for (let i = 0; i < valideHex.length; i++) {
        if (valideHex[i].length === 3) {
            valideHex[i] = valideHex[i][0] + valideHex[i][0] + valideHex[i][1] + valideHex[i][1] + valideHex[i][2] + valideHex[i][2]
        }
    }

// приводим цвет к негативу, добавляем в начало строки знак "#"
// переносим элементы из 'valideHex' в 'negativeHex'
    for (let i = 0; i < valideHex.length; i++) {
        for (let j = 0; j < valideHex[i].length; j++) {
            var negativeObj = {
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
            valideHex[i] = valideHex[i].replace(valideHex[i][j], negativeObj[valideHex[i][j]])
            negativeHex[i] = '#' + valideHex[i]
        }
    }
    console.log(negativeHex);
}

validateColor('#000', '#fffffff')