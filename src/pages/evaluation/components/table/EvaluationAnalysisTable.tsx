import { Table, Tooltip } from '../../../../components'
import React from 'react'

export interface DataType {
    key: React.Key
    no: number
    question: string
    answer: string
    groundTruth: string
}

const EvaluationAnalysisTable = () => {
    const columns = [
        {
            title: 'no.',
            dataIndex: 'no',
            width: '80px',
        },
        {
            title: 'Q',
            dataIndex: 'question',
            ellipsis: true,
            render: (text: string) => (
                <Tooltip title={text} placement="topLeft">
                    {text}
                </Tooltip>
            ),
        },
        {
            title: 'A',
            dataIndex: 'answer',
            ellipsis: true,
            render: (text: string) => (
                <Tooltip title={text} placement="topLeft">
                    {text}
                </Tooltip>
            ),
        },
        {
            title: 'Ground Truth',
            dataIndex: 'groundTruth',
            ellipsis: true,
            render: (text: string) => (
                <Tooltip title={text} placement="topLeft">
                    {text}
                </Tooltip>
            ),
        },
    ]

    const data: DataType[] = [
        {
            key: 1,
            no: 1,
            question: 'What is the tallest building in Seoul?',
            answer: 'I do not know',
            groundTruth: '???',
        },
        {
            key: 2,
            no: 2,
            question: 'Who is the strongest in the world?',
            answer: 'It is me',
            groundTruth: '???',
        },
        {
            key: 2,
            no: 2,
            question:
                'What time is it now? What time is it now? What time is it now? What time is it now? What time is it now?',
            answer: 'I am sorry',
            groundTruth: '???',
        },
    ]

    return <Table columns={columns} dataSource={data} pagination={false} />
}

export default EvaluationAnalysisTable
