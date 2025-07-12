import { Button, Table, Tag, Tooltip } from '../../../../components'
import { DeleteOutlined } from '@ant-design/icons'
import React from 'react'

const DatasetsTable = () => {
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            ellipsis: true,
            render: (text: string) => <Tag>{text}</Tag>,
        },
        {
            title: 'Description',
            dataIndex: 'description',
        },
        {
            title: 'Items',
            width: '90px',
            dataIndex: 'items',
        },
        {
            // TODO api: UTC -> 한국 시간으로 변환
            title: 'Created',
            dataIndex: 'created',
            ellipsis: true,
            render: (text: string) => (
                <Tooltip title={text} placement="topLeft">
                    {text}
                </Tooltip>
            ),
        },
        {
            title: 'Delete',
            dataIndex: 'delete',
            width: '100px',
            render: () => (
                <Button type="text">
                    <DeleteOutlined />
                </Button>
            ),
        },
    ]

    let data = []

    for (let i = 0; i < 32; i++) {
        data.push({
            key: i,
            name: `Prompt${i + 1}`,
            description: `임시${i + 1}`,
            items: 100 + i,
            created: '2024-01-01',
        })
    }

    return (
        <Table
            columns={columns}
            dataSource={data}
            pagination={{
                pageSize: 10,
                showSizeChanger: false,
            }}
        />
    )
}

export default DatasetsTable
