import styled from 'styled-components';

export const Title = styled.span`
    display: block;
    margin-top: 4rem;
    font-size: 12px;
    font-weight: 600;
    color: #c9cccf;
    text-transform: uppercase;
    letter-spacing: 1.2px;
`;

export const Author = styled.span`
    display: block;
    font-weight: 600;
    font-size: 16px;
    padding-top: 2rem;
    padding-bottom: 0.5rem;
`;

export const Linked = styled.a`
    margin-top: 2rem;
    font-size: 16px;
    margin-top: 1.2em;
    color: #333;
    transition: box-shadow 160ms ease 0s;
    box-shadow: rgb(238,251,255) 0px -9px 0px inset;
    border-bottom: 2px solid rgb(207,243,255);
    text-decoration: none;
`;