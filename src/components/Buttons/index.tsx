import styled from "styled-components";

interface Props {
    outlined?: boolean
}

export default styled.button<Props>`
    background: ${(props) => (props.outlined ? 'transparent' : 'font-variant(--twitter)' )};
    color: ${(props) => (props.outlined ? 'var(--twitter)' : 'var(--white)')};
    border: ${props => props.outlined ? '1px solid var(--twitter)' : 'none'};

    padding:8px;
    border-radius:25px;

    font-weight: bold;
    font-size:15px;

    cursor:pointer;
    outline:0;

    &:hover {
        backgorund: ${props => props.outlined ? 'var(--twitter-dark-hover)' : 'var(--teiter-light-hover'};
    }
`;