import { Table, Tooltip, Button, Tag } from '../../../../components'
import { DeleteOutlined } from '@ant-design/icons'
import React, { useEffect, useState } from 'react'
import NodeDetailDrawer from '../drawer/NodeDetailDrawer'

export interface NodeData {
    key: React.Key
    name: string
    versions: number
    latestUpdate: string
}

const PromptManageTable = () => {
    const [openDrawer, setOpenDrawer] = useState<boolean>(false)
    const [selectedRow, setSelectedRow] = useState<NodeData | undefined>(
        undefined,
    )

    const handleClickNodeName = () => {
        setSelectedRow(data[0])
    }

    const handleCloseDrawer = () => {
        setOpenDrawer(false)
    }

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            ellipsis: true,
            render: (text: string) => (
                <Tag onClick={handleClickNodeName}>{text}</Tag>
            ),
        },
        {
            title: 'Versions',
            width: '90px',
            dataIndex: 'versions',
        },
        {
            // TODO api: UTC -> 한국 시간으로 변환
            title: 'Latest Version Created At',
            dataIndex: 'latestUpdate',
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

    const data: NodeData[] = [
        {
            key: '1',
            name: 'Prompt1',
            versions: 1,
            latestUpdate: '2021-11-15',
        },
        {
            key: '2',
            name: 'Prompt2',
            versions: 2,
            latestUpdate: '2021-11-22',
        },
        {
            key: '3',
            name: 'Prompt3',
            versions: 3,
            latestUpdate:
                '2025-12-31 2025-12-31 2025-12-31 2025-12-31 2025-12-31',
        },
    ]

    useEffect(() => {
        if (selectedRow) {
            setOpenDrawer(true)
        }
    }, [selectedRow])

    return (
        <>
            <Table columns={columns} dataSource={data} pagination={false} />
            {openDrawer && (
                <NodeDetailDrawer
                    openDrawer={openDrawer}
                    selectedRow={selectedRow}
                    onClose={handleCloseDrawer}
                />
            )}
        </>
    )
}

export default PromptManageTable
