
let redDivs = document.querySelectorAll(".leftDiv");
console.log(redDivs);
let orangeDivs = document.querySelectorAll(".rightDiv");

for(let i = 0; i < redDivs.length; i++){
    redDivs[i].addEventListener('click', function () {
        if((orangeDivs[i]).style.display != 'none'){
          (orangeDivs[i]).style.display = 'none';  
        }
        else if((orangeDivs[i]).style.display == 'none'){
            (orangeDivs[i]).style.display = 'block';  
        }
    })
}
    