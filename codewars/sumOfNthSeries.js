/* 
    Taqsk is to write a function which returns the sum of the following series upto nth term
*/

const series = [1, 1/4, 1/7, 1/10, 1/13, 1/16];

const sum = series.reduce((a,b) => a + b);

const sumOfNth = ( arr, nth) => {
    let selectedNth = arr.slice(0, nth);
    return selectedNth.reduce((a, b) => a + b)
}
console.log(sumOfNth(series, 2))
