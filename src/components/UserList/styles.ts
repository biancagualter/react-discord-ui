import styled from 'styled-components'

export const Container = styled.div `
    grid-area: UL;

    display: flex;
    max-width: calc(100vh - 46px);
    flex-direction: column;
    padding: 3px 6px 0 16px;
    background-color: var(--secondary);
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: var(--tertiary);
        border-radius: 4px;

    }

    ::-webkit-scrollbar-track {
        background-color: var(--secondary);
    }

`
export const User = styled.div `
    display: flex;
    align-items: center;
    margin-top: 5px;
    padding: 5px;
    border-radius: 4px;
    background: transparent;
    cursor: pointer;

    transition: background .2s;

    &:hover {
        background: rgba(255, 255, 255, 0.1)
    }

    > strong {
        margin-left: 13px;
        font-weight: 500;
        color: var(--white);
        opacity: 0.7;

        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    > span {
            margin-left: 9px;
            background-color: var(--discord);
            color: var(--white);
            border-radius: 4px;
            padding: 4px 5px;
            text-transform: uppercase;
            font-weight: bold;
            font-size: 11px;
        } 
`
export const Role = styled.span `
    margin-top: 20px;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;
    color: var(--gray);
`
export const Avatar = styled.div `
    flex-shrink: 0;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: var(--primary);

    &.bot {
        background: var(--mention-detail);
    }
`
