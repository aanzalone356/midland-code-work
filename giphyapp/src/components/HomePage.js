import React from "react";
import Text from "../styled/elements/Text";
import Container from "../styled/elements/Container";
import { useUserContext } from "../context/UserContext";

const HomePage = () => {
    const {user} = useUserContext();
    
    return(
        <Container>
            <Container column>
                <Text>Hello Guest</Text>
                <Text>We welcome you to Gif-Station! This is you one stop shop for great gif responses.</Text>
                <Text>Please loggin to access a person gif library and browse out gif collection!</Text>
            </Container>
            <Text>We're under construction!</Text>
            <Text>We hate to show you this living room without walls but we'll have it up by next week!</Text>

            <Text>Soon to be About Us statement and how to use the API</Text>
        </Container>
    )
};

export default HomePage;