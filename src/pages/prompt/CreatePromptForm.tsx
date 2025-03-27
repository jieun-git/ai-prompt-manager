import React from 'react'
import {Form, Select, TextArea} from "../../components";
import {S_FlexWrapper} from "../styles/Page.style";
import {S_FormTitle} from "../../components/data-entry/form/Form.style";

const CreatePromptForm = () => {
    return <div>
        <S_FormTitle>Template</S_FormTitle>
        <Form
            layout="vertical"
        >
            <S_FlexWrapper
                justifyContent="space-between"
                gap={24}
            >      <Form.Item
                label="Chain Name"
                name="chain"
                width="30%"
                required
            >
                <Select placeholder="// Required" />
            </Form.Item>
                <Form.Item
                    label="Tool Name"
                    name="tool"
                    width="30%"
                    required
                >
                    <Select placeholder="// Required" />
                </Form.Item>
                <Form.Item
                    label="Model Name"
                    name="model"
                    width="30%"
                    required
                >
                    <Select placeholder="// Required" />
                </Form.Item>
            </S_FlexWrapper>
            <Form.Item
                label="System prompt"
                name="system"
                required
            >
                <TextArea height={80} resize={false} placeholder="// Required" />
            </Form.Item>
            <Form.Item
                label="User prompt"
                name="user"
                required
            >
                <TextArea height={80} resize={false} placeholder="// Required" />
            </Form.Item>
            <Form.Item
                label="Assistant prompt"
                name="assistant"
            >
                <TextArea height={80} resize={false} placeholder="// Optional" />
            </Form.Item>
        </Form>
    </div>
}

export default CreatePromptForm
