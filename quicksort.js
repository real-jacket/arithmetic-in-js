function quicksort(arr) {
    if (arr.length < 2) {
        return arr
    } else {
        let pivot = arr[0]
        let less = []
        let more = []
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] <= pivot) {
                less.push(arr[i])
            } else {
                more.push(arr[i])
            }
            
        }
        return quicksort(less).concat(pivot,quicksort(more))
    }
}

console.log(quicksort([10, 5, 2, 1, 13,54]));
