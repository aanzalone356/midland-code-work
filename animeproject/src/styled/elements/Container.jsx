import styled from '@emotion/styled';

export const Container = styled.div`
    display: flex;
    flex-direction: ${props => props.flexDirection};
    justify-content: space-around;
    color: ${props => props.color};
    background-color: ${props => props.backgroundColor};
    max-width: 90%;
    min-width: 20%;
    max-height: ${props => props.maxHeight}%;
`

export default Container