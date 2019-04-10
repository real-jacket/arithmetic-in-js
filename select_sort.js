function select_sort(arr) {
    let newArr = []
    let length = arr.length
    for (let j = 0; j < length; j++) {
        let samll = findsmall(arr)
        newArr.push(arr[samll])
        arr.splice(samll, 1)
    }
    return newArr
}

function findsmall(arr) {
    let smallIndex = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[smallIndex] - arr[i] > 0) {
            smallIndex = i
        }
    }
    return smallIndex
}

let arr = [12, 9, 8, 6, 48, 25, 88, 9]

let newArr = select_sort(arr)

console.log(newArr);