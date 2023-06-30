 async function inputVerifier(props){
    //
    switch(props.type) {
        case "username":
            return verifyUsername(props.data);
        case "password":
            return verifyPassword(props.data);
        case "general":
            return verifyFull(props.data);
        default:
            throw new Error("Invalid info");
    }
};

const verifyUsername = (username) => {
    if(username.length > 46){
        if(username.contains("SELECT")){
            console.log("User extended Access");
            return false;
        } else{
            return true;
        }
    }
}

const verifyPassword = (password) => {
    if(password.length < 46){
        if(password.contains("WHERE")){
            console.log("User extended Access");
            return false;
        } else{
            return true;
        }
    }
}

const verifyFull = (info) => {
    if(info.length < 46){
        if(info.contains("ON")){
            console.log("User extended Access");
            return false;
        } else{
            return true;
        }
    }
}

module.export = inputVerifier;