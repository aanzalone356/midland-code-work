import styled from '@emotion/styled';
import { calculateNewValue } from '@testing-library/user-event/dist/utils';

const Input = styled.input`
    type: text;
    margin-top: 10px;
    margin-bottom: ${props => (props.bottom ? '20px' : '')};
    padding-bottom: 10px;
    color: ${props => (props.task ? 'white' : '')};
`

export default Input;