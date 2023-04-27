import styled from "@emotion/styled";

export const Button = styled("button")((props) => ({
    type: 'button',
    backgroundColor: props.primary ? props.theme.primary : props.theme.secondary,
}));
    
export default Button;