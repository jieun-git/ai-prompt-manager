import { Layout } from 'antd'
import styled from 'styled-components'

export const S_Content = styled(Layout.Content)`
    position: relative;
    flex: 1;
    min-height: initial;
    padding: var(--spacing-05);
    background: var(--background);
    color: black;
`
S_Content.displayName = 'S_Content'
