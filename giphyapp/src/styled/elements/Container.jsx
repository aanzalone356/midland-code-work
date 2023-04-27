import styled from '@emotion/styled';

const Container = styled.div`
    display: flex;
    flex-direction: ${props => (props.row ? 'row' : 'column')};
`


export default Container;