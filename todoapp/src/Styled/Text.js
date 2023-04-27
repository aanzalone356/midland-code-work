import styled from '@emotion/styled';

const Text = styled.p`
    text-align: center;
    font-size: ${props => (props.title ? '35px' : '20px')};
    color: white;
    margin-bottom: 30px;
`

export default Text;