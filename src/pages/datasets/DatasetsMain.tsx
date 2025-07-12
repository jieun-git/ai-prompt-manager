import React from 'react'
import Layout from '../../components/layout/layout/Layout'
import { DatabaseOutlined } from '@ant-design/icons'
import UploadDataSetForm from './components/form/UploadDataSetForm'

const DatasetsMain = () => {
    return (
        <Layout
            menuKey="datasets"
            headerTitle={
                <span>
                    <DatabaseOutlined /> Datasets
                </span>
            }
        >
            <UploadDataSetForm />
        </Layout>
    )
}

export default DatasetsMain
