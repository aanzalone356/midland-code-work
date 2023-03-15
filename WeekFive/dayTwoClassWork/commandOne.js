module.exports.betweenNumbers = function betweenNumbers(x,y) {
    if(x > y){let greater = x; let lesser = y;}else{let greater = y; let lesser = x;}
    let ran = Math.floor(Math.random * (greater));
    while(ran < lesser){ran = Math.floor(Math.random * (greater));}
    return ran;
}

module.exports