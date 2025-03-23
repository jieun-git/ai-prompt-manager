import { Layout } from 'antd'
import styled from 'styled-components'
import { Typo_heading_04_bold} from "../../../styles/constants/typogrphy";

export const S_Header = styled(Layout.Header)`
    background: var(--background);
    border-bottom: .1rem solid var(--green-z-01);
    padding: var(--spacing-04) var(--spacing-03);
    color: var(--blue-z-02);
    ${Typo_heading_04_bold};
`
S_Header.displayName = 'S_Header'
