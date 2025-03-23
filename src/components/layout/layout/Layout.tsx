import React from 'react';
import {
    FileTextOutlined,
    LikeOutlined,
    DatabaseOutlined,
} from '@ant-design/icons';
import { LayoutProps as AntLayoutProps, MenuProps } from "antd";
import S_Layout from "./Layout.style";
import Sider from "../sider/Sider";
import Content from "../content/Content";
import Header from "../header/Header";
import Menu from "../../navigation/menu";
import {useNavigate} from "react-router-dom";

type MenuItem = Required<MenuProps>['items'][number];

interface LayoutProps {
    menuKey: string
    headerTitle?: string | React.ReactNode
}

const MenuItems: MenuItem[] = [
    { key: 'prompt', icon: <FileTextOutlined />, label: 'Prompt' },
    { key: 'evaluation', icon: <LikeOutlined />, label: 'Evaluation' },
    { key: 'data', icon: <DatabaseOutlined />, label: 'Data' }
]

const Layout:React.FC<AntLayoutProps & LayoutProps> = ({
                                                           menuKey, headerTitle, children, ...props}) => {
    const navigate = useNavigate();

    const handleClickMenu = (value: {
        key: string
    }) => {
        navigate(`/${value.key}`)
    }

    return (
        <S_Layout {...props}>
            <Sider>
                <Menu
                    // TODO Home에서 선택해서 들어온 key
                    defaultSelectedKeys={[menuKey]}
                    mode="inline"
                    // theme="dark"
                    // inlineCollapsed={collapsed}
                    items={MenuItems}
                    onClick={handleClickMenu}
                />
            </Sider>
            <S_Layout>
                <Header>{headerTitle}</Header>
                <Content>{children}</Content>
            </S_Layout>
        </S_Layout>
    )
}

export default Layout;
