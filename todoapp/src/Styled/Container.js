import styled from "@emotion/styled";

const Div = styled.div`
    display: flex;
    flex-direction: ${props => (props.row ? 'row' : 'column')};
    margin-left: ${props => (props.moveleft ? '20%' : '20px')};
    max-width: ${props => (props.top ? '100%' : '60%')};
    text-align: ${props => (props.task ? 'center' : '')};
    min-height: ${props => (props.bottom ? '100%' : '')};
`

export default Div;