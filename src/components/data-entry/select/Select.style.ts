import { Select } from 'antd'
import styled from 'styled-components'
import {ExtendedSelectProps} from "./Select";

export const S_Select = styled(Select)<ExtendedSelectProps>`
    width: ${({ width }) => width} !important;
`
S_Select.displayName = 'S_Select'

