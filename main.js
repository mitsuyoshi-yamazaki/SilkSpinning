var repeat = require('repeat-string');

console.log(repeat('hey', 100));
document.write(repeat('hey', 10));
console.log('hoge');

console.log(require('article-parser'))

console.log('hoge2');


const {
    extract 
} = require('article-parser');
   
let url = 'https://goo.gl/MV8Tkh';

console.log(extract);
console.log('fuga');
   
extract(url).then((article) => {
  console.log(article);
}).catch((err) => {
  console.log(err);
});