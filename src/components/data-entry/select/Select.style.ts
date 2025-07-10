import { Select } from 'antd'
import styled from 'styled-components'
import { ExtendedSelectProps } from './Select'

export const S_Select = styled(Select)<ExtendedSelectProps>`
    width: ${({ width }) => width} !important;

    && .ant-select-selector {
        border: 1px solid var(--green-z-01);
        background: var(--background);
        color: var(--white);

        &:hover {
            border-color: var(--yellow-z-01);
        }
    }

    && .ant-select-selection-placeholder {
        color: var(--text-placeholder);
    }

    &&.ant-select-disabled .ant-select-selector {
        background-color: var(--disabled-input);
        color: var(--text-placeholder);

        &:hover {
            border-color: var(--green-z-01);
        }
    }

    && .ant-select-arrow {
        color: var(--green-z-01);
    }
`
S_Select.displayName = 'S_Select'
