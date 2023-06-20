import styled from "@emotion/styled";

export const Button = styled("button")((props) => ({
    type: 'button',
    maxHeight: 40,
    backgroundColor: props.primary ? props.theme.primary : props.theme.secondary,
}));
    
export default Button;