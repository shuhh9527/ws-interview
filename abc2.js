let arr =['sf','fd','gh']
let bb = arr.splice(0)

console.log(arr)
console.log(bb)

for (let i of bb) {
    arr.push(i)
}

console.log('arr')
console.log(arr)

