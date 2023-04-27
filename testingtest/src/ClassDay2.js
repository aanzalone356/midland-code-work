import React from 'react';

function Clock(){
    let countdown = 10;
    let x = setInterval(function() {
        console.log(countdown);
        countdown--;
        if(countdown === 0){
            clearInterval(x);
        }
    },1000);
    return(
        <div>
            //
        </div>
    )
}

export default Clock();