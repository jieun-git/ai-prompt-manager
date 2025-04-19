import React from 'react';
import { Tabs, Layout } from "../../components";
import ProceedEvaluation from './ProceedEvaluation'

import {
    LikeOutlined,
} from '@ant-design/icons'
import { TabsProps } from 'antd'

const EvaluationMain = () => {
    const items: TabsProps['items'] = [
        {
            key: 'progress',
            label: '평가 진행',
            children: <ProceedEvaluation />,
        },
        {
            key: 'history',
            label: '과거 평가 이력 조회',
            children: <>NONE</>,
        },
    ];

    return (
        <Layout menuKey="evaluation" headerTitle={<span><LikeOutlined /> 평가 관리</span>}>
            <Tabs defaultActiveKey="progress" items={items} />
        </Layout>
    )
}

export default EvaluationMain;
