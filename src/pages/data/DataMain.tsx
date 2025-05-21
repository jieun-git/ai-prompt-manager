import React from 'react'
import Layout from '../../components/layout/layout/Layout'
import { DatabaseOutlined } from '@ant-design/icons'
import UploadDataSetForm from './components/form/UploadDataSetForm'

const DataMain = () => {
    return (
        <Layout
            menuKey="data"
            headerTitle={
                <span>
                    <DatabaseOutlined /> 데이터 평가
                </span>
            }
        >
            <UploadDataSetForm />
        </Layout>
    )
}

export default DataMain
