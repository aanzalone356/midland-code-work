const axios = require("axios");
export async function userDBFinder(e, username, password, logType) {
    //
    e.preventDefault();
    try{
        //
        const response = await axios.get('http://localhost:3006/userDBFinder', {
            username: username,
            password: password,
        });
        if(response.status === 500 || response.status === 400){
            return response;
        }else if(logType === "register"){
            if(response.username.length === 0 || response.username === null){
                return true;
            } else{
                return "Username is already in use";
            }
        } else if(logType === "login"){
            if(response.username === username && response.password === "Verified"){
                return true;
            } else{
                return "Username or Password is Incorrect";
            }
        } else{
            return "Unknown Error Contact Server Manager";
        }

    }catch(error){
        //
        console.error(error);
    }
};