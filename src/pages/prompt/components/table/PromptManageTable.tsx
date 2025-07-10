import { Table, Tooltip, Button, Tag } from '../../../../components'
import { DeleteOutlined } from '@ant-design/icons'

interface DataType {
    key: React.Key
    name: string
    versions: number
    latestUpdate: string
}

const PromptManageTable = () => {
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            ellipsis: true,
            render: (text: string) => (
                <Button type="text">
                    <Tag>{text}</Tag>
                </Button>
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

    const data: DataType[] = [
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

    return <Table columns={columns} dataSource={data} pagination={false} />
}

export default PromptManageTable
