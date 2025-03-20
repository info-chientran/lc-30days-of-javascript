/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
const map = (arr, fn) => {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        const num = fn(arr[i], i);
        newArr.push(num);
    }

    return newArr;
};

const mapA = map.plusone([1, 2, 3]);
console.log(mapA());
