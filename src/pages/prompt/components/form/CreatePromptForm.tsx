import React from 'react'
import { Form, Select, TextArea, Button } from '../../../../components'
import { S_Helper, S_FlexWrapper } from '../../../styles/Page.style'
import { PlusCircleOutlined } from '@ant-design/icons'

const CreatePromptForm = () => {
    return (
        <Form layout="vertical">
            <Form.Item label="Node Name" name="node" width="100%" required>
                <Select placeholder="Select a node name" />
            </Form.Item>
            <Form.Item label="Prompt" name="prompt" required>
                <S_Helper>
                    Define your prompt template. You can use{' '}
                    {String.raw`{{variable}}`} to insert variables into your
                    prompt. <br />
                    Note: Variables must be alphabetical characters or
                    underscores. You can also link other text prompts using the
                    plus button.
                </S_Helper>
                <S_FlexWrapper
                    flexDirection="column"
                    margin="8px 0 0 0"
                    gap={16}
                >
                    drag & drop
                    <Button>
                        <PlusCircleOutlined />
                        Add message
                    </Button>
                </S_FlexWrapper>
            </Form.Item>
            <Form.Item label="Commit message (Optional)" name="commitMessage">
                <S_Helper>
                    Provide information about the changed made in this version.
                    Helps maintain a clear history of prompt iterations.
                </S_Helper>
                <TextArea
                    height={80}
                    resize={false}
                    placeholder="Add commit message..."
                />
            </Form.Item>
        </Form>
    )
}

export default CreatePromptForm
