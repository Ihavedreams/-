/*
3、 已知如下数组：
var arr = [
    [1, 2, 2],
    [3, 4, 5, 5],
    [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10
];
编写一个程序将数组扁平化去除其中重复部分数据， 最终得到一个升序且不重复的数组
*/

let arr = [
    [1, 2, 3],
    [3, 4, 5, 5],
    [6, 7, 8, 9, [11, 12, [12, 13 [14]]]],
    10
]

let  repeat= (arr) => {
    /* 1、扁平化 */
    let newArr = [];
    function flat(arr) {
        for(let i = 0; i < arr.length; i++) {
            arr[i] instanceof Array ? flat(arr[i]) : newArr.push(arr[i])    
        }
        return newArr
    }
    console.log(flat(arr))
    /* 2、 去重 */
    let duplicate = [];
    for (let i = 0; i < newArr.length; i++) {
        if (duplicate.indexOf(newArr[i]) === -1) {
            duplicate.push(newArr[i])
        }
    }   
    /* 3、排序 */
    function systemSort(arr) {
        return arr.sort(function(a, b) {
            return a - b
        })
    }
    let sort = systemSort(duplicate)
    console.log(sort)
    
}
repeat(arr)


