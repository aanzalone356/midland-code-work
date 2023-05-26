import react, {useState} from 'react';
import Container from '.../todoapp/src/Styled/Container.js';
import Button from '.../todoapp/src/Styled/Button.js';
import Input from '.../todoapp/src/Styled/Input.js';
import Text from '.../todoapp/src/Styled/Text.js';

function DisplayTiers() {
    const [User, setUser] = useState([
        {id: 1, name: 'Steve'}
    ])
    const [userList, setUserList] = useState([
        {tier: 's', index: 0},
        {tier: 'a', index: 1},
        {tier: 'b', index: 2},
        {tier: 'c', index: 3},
        {tier: 'd', index: 4},
    ]);
    const [listName, setListName] = useState('');

    const handleUser = (user) => {
        let user = [...User, {id: User.length+1, name: user}]
        setUser(user);
        console.log(User);
    }

    const handleUserList = (tier) => {
        let newList = [...userList, {tier: tier, index: User.length}]
        setUserList(newList);
        console.log(userList);
    }

    return (
    <Container>
        <Text>{listName}</Text>
        {userList.map((tier, index) => {
            return (
            <div key={index}>
                <Text>{tier.id}{tier.tier}</Text>
            </div>
            )
        })}
        <Button></Button>
    </Container>
    )
}

export default DisplayTiers;