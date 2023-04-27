import React, {useState, useEffect} from 'react';
import Text from './Styled/Text.js';

function Timer(){
    const count = 0;
    const [curTime, setCurTime] = useState(count);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurTime(curTime + 1);
        }, 1000);
        //console.log(`Hit: ${curTime}`);
        
        return () => clearInterval(intervalId);
    },[curTime]);

    return (
        <Text>You've been on the site for: {curTime} seconds</Text>
    )
}

export default Timer;