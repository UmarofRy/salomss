let meva = ['olma', 'anor', 'uzum', 'banan', 'kiwi'];

let a = [];
let b = [];

console.log(meva);

for (item of meva) {
         if ( item.includes('a')) {
                  a.push(item);
         } else {
                  b.push(item);
                  
         }
}

console.log(a);
console.log(b);
