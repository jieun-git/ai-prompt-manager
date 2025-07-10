import styled from 'styled-components'
import { TagProps, Tag } from 'antd'

const S_Tag = styled(Tag)<TagProps>`
    &:hover {
        background: var(--yellow-z-01) !important;
    }
`

S_Tag.displayName = 'S_Tag'
export default S_Tag
