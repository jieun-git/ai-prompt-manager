import { S_FormTitle } from '../../../../components/data-entry/form/Form.style'
import { Form, Select, TextArea, Spin } from '../../../../components'
import { S_FlexWrapper } from '../../../styles/Page.style'
import React, { useEffect, useState } from 'react'
import EvaluationAnalysisTable from '../table/EvaluationAnalysisTable'

const EvaluationAnalysisForm = () => {
    const [version, setVersion] = useState<string | undefined>(undefined)

    const [loading, setLoading] = useState<boolean>(false)
    const [showResult, setShowResult] = useState<boolean>(false)

    const handleChangeVersion = async (value: string) => {
        setVersion(value)
    }

    const fetchAnalyze = async () => {
        try {
            setLoading(true)

            //success
            setTimeout(() => {
                setShowResult(true)
                setLoading(false)
                // setTableData(responseData)
            }, 2000)
        } catch (e) {
            console.error('[ERROR] fetchAnalyze', e)
        }
    }

    useEffect(() => {
        if (version) {
            fetchAnalyze()
        }
    }, [version])

    return (
        <S_FlexWrapper flexDirection="column" gap={8}>
            <S_FormTitle>Analyze</S_FormTitle>
            <Form layout="vertical">
                <Spin spinning={loading}>
                    <S_FlexWrapper alignItems="center" gap={24}>
                        <S_FlexWrapper flexDirection="column">
                            <Form.Item
                                label="Version"
                                name="version"
                                width="600px"
                                required
                            >
                                <Select
                                    placeholder="// Required"
                                    options={[
                                        { label: 'Ver.1', value: 1 },
                                        { label: 'Ver.2', value: 2 },
                                        { label: 'Ver.3', value: 3 },
                                        { label: 'Ver.4', value: 4 },
                                    ]}
                                    onChange={handleChangeVersion}
                                />
                            </Form.Item>
                            {showResult && (
                                <Form.Item
                                    label="Prompt"
                                    name="prompt"
                                    width="600px"
                                    required
                                >
                                    <TextArea
                                        disabled
                                        height={200}
                                        resize={false}
                                        placeholder="// Required"
                                    />
                                </Form.Item>
                            )}
                        </S_FlexWrapper>
                        {showResult && <EvaluationAnalysisTable />}
                    </S_FlexWrapper>
                </Spin>
            </Form>
        </S_FlexWrapper>
    )
}

export default EvaluationAnalysisForm
