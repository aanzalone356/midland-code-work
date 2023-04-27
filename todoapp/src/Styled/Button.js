import styled from "@emotion/styled";

const Button = styled.button`
    color: ${props => (props.primary ? 'black' : 'lightblue')};
    background-color: ${props => (props.primary ? 'white' : 'black')};
    max-width: 100px;
    margin-left: ${props => (props.moveleft ? '80%' : '')};
`

export default Button;