const original = [1, 4, 12, 21, 53, 88, 112, 6, 5, 14, 18, 3, 242, 77, 82];
let numeroPar = [];
for (let par of original) {
    if(par % 2 === 0) {
        numeroPar.push(par);
    }
}
console.log(numeroPar);