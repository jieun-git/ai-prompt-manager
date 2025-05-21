import { Select } from 'antd'
import styled from 'styled-components'
import { ExtendedSelectProps } from './Select'

export const S_Select = styled(Select)<ExtendedSelectProps>`
    width: ${({ width }) => width} !important;

    &.ant-select-disabled .ant-select-selector {
        background-color: var(--white) !important;
        color: var(--blue-z-04) !important;
    }
`
S_Select.displayName = 'S_Select'
