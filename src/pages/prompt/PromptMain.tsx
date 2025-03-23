import React from 'react';
import Layout from '../../components/layout/layout/Layout';
import {
    FileTextOutlined,
    LikeOutlined,
    DatabaseOutlined,
} from '@ant-design/icons';

const PromptMain = () => {
    return (
        <Layout menuKey="prompt" headerTitle={<span><FileTextOutlined /> 프롬프트 관리</span>}>
            <div style={{color: 'white', fontSize: '4.8rem'}}>Prompt</div>
        </Layout>
    )
}

export default PromptMain;
