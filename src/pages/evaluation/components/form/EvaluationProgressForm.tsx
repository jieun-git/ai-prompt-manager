import React, { useEffect, useState } from 'react'
import {
    Button,
    Form,
    Select,
    Spin,
    Input,
    Tooltip,
} from '../../../../components'
import { S_FormTitle } from '../../../../components/data-entry/form/Form.style'
import { S_FlexWrapper } from '../../../styles/Page.style'
import { ForwardOutlined, BackwardOutlined } from '@ant-design/icons'
import EvaluationResultTable from '../table/EvaluationResultTable'

const EvaluationProgressForm = () => {
    const defaultTableColumns = [
        {
            title: 'ver.',
            dataIndex: 'version',
            width: '80px',
            sorter: (a: { prompt: string }, b: { prompt: string }) =>
                a.prompt.localeCompare(b.prompt),
            sortDirections: ['ascend', 'descend'],
        },
        {
            title: 'Prompt',
            dataIndex: 'prompt',
            ellipsis: true,
            render: (text: string) => (
                <Tooltip title={text} placement="topLeft">
                    {text}
                </Tooltip>
            ),
        },
    ]

    const [tableColumns, setTableColumns] = useState<any>(undefined)
    const [tableData, setTableData] = useState<any>(undefined)

    const [loading, setLoading] = useState<boolean>(false)
    const [showResult, setShowResult] = useState<boolean>(false)
    const [selectedMetric, setSelectedMetric] = useState<string[] | undefined>(
        undefined,
    )

    const handleClickRun = async () => {
        setLoading(true)

        try {
            const metricColumns: any = selectedMetric?.map((metric) => {
                return {
                    title: metric,
                    dataIndex: metric,
                    width: '100px',
                    sorter: (a: any, b: any) =>
                        a[metric].localeCompare(b[metric]),
                    sortDirections: ['ascend', 'descend'],
                }
            })

            const responseData = [
                {
                    version: 'Ver.1',
                    prompt: '메트릭은 api 연동 안 하면 테스트 할 방법이 없어~~~~~~~~메트릭은 api 연동 안 하면 테스트 할 방법이 없어~~~~~~~~메트릭은 api 연동 안 하면 테스트 할 방법이 없어~~~~~~~~메트릭은 api 연동 안 하면 테스트 할 방법이 없어~~~~~~~~메트릭은 api 연동 안 하면 테스트 할 방법이 없어~~~~~~~~',
                },
                {
                    version: 'Ver.2',
                    prompt: '메트릭은 api 연동 안 하면 테스트 할 방법이 없어~~~~~~~~',
                },
                {
                    version: 'Ver.3',
                    prompt: '메트릭은 api 연동 안 하면 테스트 할 방법이 없어~~~~~~~~',
                },
            ]

            setTableColumns([...defaultTableColumns, ...metricColumns])

            // success
            setTimeout(() => {
                setShowResult(true)
                setLoading(false)
                setTableData(responseData)
            }, 2000)
        } catch (e) {
            console.error('[ERROR] Evaluation Error', e)
        } finally {
            // setLoading(false)
        }
    }

    const handleClickRewind = () => {
        setShowResult(false)
    }

    const handleChangeMetric = (values: string[]) => {
        setSelectedMetric(values)
    }

    useEffect(() => {
        if (tableColumns) {
        }
    }, [tableColumns])

    return (
        <S_FlexWrapper flexDirection="column" gap={8}>
            <S_FormTitle>Evaluation</S_FormTitle>
            <Form layout="vertical">
                <Spin spinning={loading}>
                    <S_FlexWrapper alignItems="center" gap={4}>
                        <S_FlexWrapper flexDirection="column">
                            <Form.Item
                                label="Chain"
                                name="chain"
                                width="400px"
                                required
                            >
                                {showResult ? (
                                    <Input disabled />
                                ) : (
                                    <Select placeholder="// Required" />
                                )}
                            </Form.Item>
                            <Form.Item
                                label="Tool"
                                name="tool"
                                width="400px"
                                required
                            >
                                {showResult ? (
                                    <Input disabled />
                                ) : (
                                    <Select placeholder="// Required" />
                                )}
                            </Form.Item>
                            <Form.Item
                                label="Model"
                                name="model"
                                width="400px"
                                required
                            >
                                {showResult ? (
                                    <Input disabled />
                                ) : (
                                    <Select placeholder="// Required" />
                                )}
                            </Form.Item>
                            <Form.Item
                                label="Teset data set"
                                name="test"
                                width="400px"
                                required
                            >
                                {showResult ? (
                                    <Input disabled />
                                ) : (
                                    <Select placeholder="// Required" />
                                )}
                            </Form.Item>
                            <Form.Item
                                label="Metric"
                                name="metric"
                                width="400px"
                                required
                            >
                                {showResult ? (
                                    <Input disabled />
                                ) : (
                                    <Select
                                        mode="multiple"
                                        options={[
                                            {
                                                label: 'metric1',
                                                value: 'metric1',
                                            },
                                            {
                                                label: 'metric2',
                                                value: 'metric2',
                                            },
                                            {
                                                label: 'metric3',
                                                value: 'metric3',
                                            },
                                            {
                                                label: 'metric4',
                                                value: 'metric4',
                                            },
                                            {
                                                label: 'metric5',
                                                value: 'metric5',
                                            },
                                            {
                                                label: 'metric6',
                                                value: 'metric6',
                                            },
                                            {
                                                label: 'metric7',
                                                value: 'metric7',
                                            },
                                            {
                                                label: 'metric8',
                                                value: 'metric8',
                                            },
                                            {
                                                label: 'metric9',
                                                value: 'metric9',
                                            },
                                            {
                                                label: 'metric10',
                                                value: 'metric10',
                                            },
                                            {
                                                label: 'metric11',
                                                value: 'metric11',
                                            },
                                            {
                                                label: 'metric12',
                                                value: 'metric12',
                                            },
                                            {
                                                label: 'metric13',
                                                value: 'metric13',
                                            },
                                            {
                                                label: 'metric14',
                                                value: 'metric14',
                                            },
                                            {
                                                label: 'metric15',
                                                value: 'metric15',
                                            },
                                        ]}
                                        placeholder="// Required"
                                        onChange={handleChangeMetric}
                                    />
                                )}{' '}
                            </Form.Item>
                        </S_FlexWrapper>
                        <Button
                            type="text"
                            onClick={
                                showResult ? handleClickRewind : handleClickRun
                            }
                        >
                            <Tooltip title={showResult ? 'Rewind' : 'Evaluate'}>
                                {showResult ? (
                                    <BackwardOutlined
                                        style={{ fontSize: '36px' }}
                                    />
                                ) : (
                                    <ForwardOutlined
                                        style={{ fontSize: '36px' }}
                                    />
                                )}
                            </Tooltip>
                        </Button>
                        {showResult && (
                            <>
                                <EvaluationResultTable
                                    data={tableData}
                                    columns={tableColumns}
                                />
                            </>
                        )}
                    </S_FlexWrapper>
                </Spin>
            </Form>
        </S_FlexWrapper>
    )
}

export default EvaluationProgressForm
