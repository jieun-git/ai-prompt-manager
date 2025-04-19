import React from 'react'
import { Form, Button, TextArea, Tooltip } from '../../../../components'
import { S_DisabledContent, S_FlexWrapper } from '../../../styles/Page.style'
import { ForwardOutlined } from '@ant-design/icons'
import { S_FormTitle } from '../../../../components/data-entry/form/Form.style'

const RunPromptForm = () => {
    return (
        <S_FlexWrapper flexDirection="column" gap={8}>
            <S_FormTitle>Test</S_FormTitle>
            <S_DisabledContent disabled={false}>
                <Form layout="vertical">
                    <S_FlexWrapper
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Form.Item
                            label="Question"
                            name="question"
                            width="48%"
                            required
                        >
                            <TextArea
                                height={140}
                                resize={false}
                                placeholder="// Question"
                            />
                        </Form.Item>
                        <Tooltip title="Run">
                            <Button type="text" ghost>
                                <ForwardOutlined style={{ fontSize: '40px' }} />
                            </Button>
                        </Tooltip>
                        <Form.Item label="Answer" name="answer" width="48%">
                            <TextArea readOnly height={140} resize={false} />
                        </Form.Item>
                    </S_FlexWrapper>
                </Form>
            </S_DisabledContent>
        </S_FlexWrapper>
    )
}

export default RunPromptForm
