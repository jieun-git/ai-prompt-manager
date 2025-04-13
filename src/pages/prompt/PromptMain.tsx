import React from 'react';
import { Tabs, Layout } from "../../components";
import {TabsProps} from "antd";
import CreatePrompt from "./CreatePrompt";
import EditPrompt from "./EditPrompt";

import {
    FileTextOutlined,
} from '@ant-design/icons';

const PromptMain = () => {
    const items: TabsProps['items'] = [
        {
            key: 'create',
            label: 'Prompt 추가',
            children: <CreatePrompt />,
        },
        {
            key: 'update',
            label: 'Prompt 조회/편집',
            children: <EditPrompt />,
        },
    ];

    return (
        <Layout menuKey="prompt" headerTitle={<span><FileTextOutlined /> 프롬프트 관리</span>}>
            <Tabs defaultActiveKey="create" items={items} />
        </Layout>
    )
}

export default PromptMain;
