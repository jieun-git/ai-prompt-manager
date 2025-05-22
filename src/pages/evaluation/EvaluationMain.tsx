import React from 'react'
import { Layout } from '../../components'
import ProceedEvaluation from './ProceedEvaluation'

import { LikeOutlined } from '@ant-design/icons'

const EvaluationMain = () => {
    return (
        <Layout
            menuKey="evaluation"
            headerTitle={
                <span>
                    <LikeOutlined /> 평가 관리
                </span>
            }
        >
            <ProceedEvaluation />
        </Layout>
    )
}

export default EvaluationMain
