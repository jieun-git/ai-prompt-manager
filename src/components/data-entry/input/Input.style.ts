import { Input } from 'antd'
import styled from 'styled-components'
import {ExtendedTextAreaProps} from "./Input";

export const S_Input = styled(Input)`
    width: ${({ width }) => width} !important;

`
S_Input.displayName = 'S_Input'

export const S_TextArea = styled(Input.TextArea)<ExtendedTextAreaProps>`
    height: ${({ height }) => height}px !important;
    resize: ${({ resize }) => resize ? '': 'none'} !important;

`
S_TextArea.displayName = 'S_TextArea'

export const S_InputSearch = styled(Input.Search)`
    width: ${({ width }) => width} !important;
`
S_InputSearch.displayName = 'S_InputSearch'
