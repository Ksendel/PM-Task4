const months = new Map([
    [1, 'January'], [2, 'February'],
    [3, 'March'], [4, 'April'],
    [5, 'May'], [6, 'June'],
    [7, 'July'], [8, 'August'],
    [9, 'September'], [10, 'October'],
    [11, 'November'], [12, 'December']
])

function monthNum(x) {
    if (0 < x <= months.size)
        alert(months.get(x)) // вытягиваю значение по ключу
    else {
        alert('Ops. Incorrect input')
    }
}
// меняю местами ключ - значение
const reverse = ((mapObj) => {
    const monthSwap = new Map();
    mapObj.forEach ( ((value,key) => { monthSwap.set(value,key) }) );
    return monthSwap;
});


function monthStr(x) {
    let newStr = x[0].toUpperCase() + x.slice(1);
    let arr = reverse(months)
    if (arr.has(newStr)) { // проверяю есть ли вообще такой ключ
        alert(arr.get(newStr))
    }
}

function type(arg) {
    if (!isNaN(Number(arg))) { // проверяю число ли это
        monthNum(Number(arg))
    } else {
        monthStr(arg)
    }
}

let arg = prompt('Enter a number from 1 to 12 to find out which month it is or vice versa', '1')
type(arg)




