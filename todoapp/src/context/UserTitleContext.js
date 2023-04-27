import { createContext } from "react";

const UserTitleContext = createContext({
    userTitle: {
        username: '',
        title: '',
        password: '',
    },
    setUserTitle: () => {},
})


export default UserTitleContext;