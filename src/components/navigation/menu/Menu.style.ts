import {Menu} from 'antd'
import styled from 'styled-components'

const S_Menu = styled(Menu)`
    height: 100%;
    background-color: var(--background-z-default);

    .ant-menu-item {
        color: var(--blue-z-02);
        
        &.ant-menu-item-selected {
            color: var(--blue-z-04);
            border-radius: var(--radius-01);
        }
        &:not(.ant-menu-item-selected):not(.ant-menu-submenu-selected):hover {
            color: var(--yellow-z-01);
        }
    }
    
`

S_Menu.displayName = 'S_Menu'

export default S_Menu
