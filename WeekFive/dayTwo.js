//Actually Saying

// let obj = {
//     reverse: function reverse(str){
//         return str.split('').reverse().join('');
//     }
// }

// let reverse = obj.reverse

module.exports.reverse = function reverse(str) {
    console.log(randomNum(1, 20));
    return str.split("").reverse().join("");
  };
  
 module.exports
  
  function randomNum(a, b) {
    return Math.floor(Math.random() * b) + a;
  }