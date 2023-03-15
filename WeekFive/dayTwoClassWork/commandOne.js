module.exports.betweenNumbers = function betweenNumbers(x,y) {
    let greater;
    let lesser;
    if(x > y){greater = x; lesser = y;}else{greater = y;  lesser = x;}
    let ran = Math.floor(Math.random() * (greater));
    while(ran < lesser){ran = Math.floor(Math.random * (greater));}
    return ran;
}

module.exports