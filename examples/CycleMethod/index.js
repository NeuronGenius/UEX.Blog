const arr = ["a", "b", "c"];
const obj = {
    a: '这是a',
    b: '这是b',
    c: '这是c'
}
for(let i = 0; i < arr.length; i++) {
    // if(i === 1) break
    // if(i === '1') return 
    console.log(i, arr[i], typeof i)
}

Array.prototype.newArr = () => {}
Array.prototype.arr = ['1233']

for (const i in arr) {
    // if(i === '1') break
    // if(i === '1') return 
    console.log(i, arr[i], typeof i)
}

for (const i in obj) {
    console.log(i, obj[i], typeof i)
}

arr.forEach((currentValue, index, arr) => {
    console.log(currentValue, index, arr)
    if(index === 1) return
    console.log(currentValue, index, arr)
})

// 错误
// for (const i of obj) {
//     console.log(i)
// }

for (const i of arr) {
    console.log(i)
}
for (const i of 'ABCDEF') {
    console.log(i)
}

const map = new Map([['a', '这是a'], ['b', '这是b'], ['c', '这是c']])
for (const [key, value] of map) {
    // if(key === 'b') break
    console.log('llll')
    console.log(key, value)
  }

const set = new Set([5, 0, 1, 1, 2, 2, 1, 3, 4 ,5])
for (const value of set) {
    console.log(value)
    // if(value === 0) return
    console.log('llll')
}


// const newArr = arr.map((value, index, array) => {
//     console.log(value, index, array)
//     return value + '1'
// })

// console.log(newArr, arr)


const newFilterArr = arr.filter((value, index, array) => {
    console.log(value, index, array)
    return value !== 'a'
})

console.log(newFilterArr, arr)


const isTrue = [].some((value, index, array) => {
    console.log(value, index, array, 'xxx')
    return value !== 'a'
})

console.log(isTrue, arr, 'isTrue')

const isEveryTrue = arr.every((value, index, array) => {
    console.log(value, index, array, 'xxx')
    return value !== 'a'
})

console.log(isEveryTrue, arr, 'isEveryTrue')

const numberArr = [1, 2, 3,4,665,23,534,67,87]
const newReduceArr = numberArr.reduceRight((total, currentValue, currentIndex, arr) => {
    console.log(total, currentValue, currentIndex)
    return currentValue + total
}, 666)

console.log(newReduceArr, numberArr, 'newReduceArr')

console.log(Object.keys(arr), Object.values(arr), Object.entries(arr), new Map(Object.entries(arr)))
console.log(Object.keys(obj), Object.values(obj), Object.entries(obj), new Map(Object.entries(obj)))
