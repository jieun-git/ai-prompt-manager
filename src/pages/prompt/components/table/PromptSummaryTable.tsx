import {Table, Switch, Checkbox, Tooltip} from "../../../../components";

interface DataType {
    key: React.Key;
    version: number;
    system: string;
    user: string;
    assistant: string;
    latestUpdate: string;
    isActive: boolean;
    isDelete: boolean;
}

const PromptSummaryTable = () => {
    const columns = [
        {
            title: 'ver.',
            dataIndex: 'version',
        },
        {
            title: 'System prompt',
            dataIndex: 'system',
            ellipsis: true,
            render: (text: string) => <Tooltip title={text} placement="topLeft">{text}</Tooltip>
        },
        {
            title: 'User prompt',
            dataIndex: 'user',
            ellipsis: true,
            render: (text: string) => <Tooltip title={text} placement="topLeft">{text}</Tooltip>
        },
        {
            title: 'Assistant prompt',
            dataIndex: 'assistant',
            ellipsis: true,
            render: (text: string) => <Tooltip title={text} placement="topLeft">{text}</Tooltip>
        },
        {
            title: 'Latest update',
            dataIndex: 'latestUpdate',
            ellipsis: true,
            render: (text: string) => <Tooltip title={text} placement="topLeft">{text}</Tooltip>
        },
        {
            title: 'Active',
            dataIndex: 'isActive',
            render: () => <Switch />
        },
        {
            title: 'Delete',
            dataIndex: 'isDelete',
            render: () => <Checkbox />
        },
    ];

    const data: DataType[] = [
        {
            key: '1',
            version: 1,
            system: 'young cheol young cheol young cheol young cheol young cheol young cheol young cheol young cheol',
            user: 'ji eun',
            assistant: 'we are 1115',
            latestUpdate: '2021-11-15',
            isActive: false,
            isDelete: false
        },
        {
            key: '2',
            version: 2,
            system: 'young dong',
            user: 'sang yoon',
            assistant: 'they are 1122 they are 1122 they are 1122 they are 1122 they are 1122 they are 1122',
            latestUpdate: '2021-11-22',
            isActive: false,
            isDelete: false
        },
        {
            key: '3',
            version: 3,
            system: 'but',
            user: 'we are one we are one we are one we are one we are one we are one',
            assistant: '3 - 1 = 0',
            latestUpdate: '2025-12-31 2025-12-31 2025-12-31 2025-12-31 2025-12-31',
            isActive: false,
            isDelete: false
        },
    ];

    return (
        <Table
            columns={columns}
            dataSource={data}
            pagination={false}
        />
    )
}

export default PromptSummaryTable
