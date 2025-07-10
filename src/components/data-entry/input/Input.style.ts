import { Input } from 'antd'
import styled from 'styled-components'
import { ExtendedTextAreaProps } from './Input'

export const S_Input = styled(Input)`
    width: ${({ width }) => width} !important;

    background: var(--background);
    border: 1px solid var(--green-z-01);
    color: var(--white);

    &:focus,
    &.ant-input-focused {
        background: var(--background);
        border: 1px solid var(--yellow-z-01);
    }

    &::placeholder {
        color: var(--text-placeholder);
        opacity: 1;
    }

    &:hover {
        background: var(--background);
        border: 1px solid var(--yellow-z-01);
    }

    &.ant-input-disabled,
    input[disabled] {
        background-color: var(--disabled-input) !important;
        border: 1px solid var(--green-z-01);
        color: var(--text-disabled);

        &::placeholder {
            color: var(--text-disabled);
            opacity: 1;
        }
    }
`
S_Input.displayName = 'S_Input'

export const S_TextArea = styled(Input.TextArea)<ExtendedTextAreaProps>`
    height: ${({ height }) => height}px !important;
    resize: ${({ resize }) => (resize ? '' : 'none')} !important;

    background: var(--background);
    border: 1px solid var(--green-z-01);
    color: var(--white);

    &:focus,
    &.ant-input-focused {
        background: var(--background);
        border: 1px solid var(--yellow-z-01);
    }

    &::placeholder {
        color: var(--text-placeholder);
        opacity: 1;
    }

    &:hover {
        background: var(--background);
        border: 1px solid var(--yellow-z-01);
    }

    &.ant-input-disabled,
    textarea:disabled {
        background-color: var(--disabled-input) !important;
        border: 1px solid var(--green-z-01);
        color: var(--text-disabled);

        &::placeholder {
            color: var(--text-disabled);
            opacity: 1;
        }
    }
`
S_TextArea.displayName = 'S_TextArea'

export const S_InputSearch = styled(Input.Search)`
    width: ${({ width }) => width} !important;
`
S_InputSearch.displayName = 'S_InputSearch'
