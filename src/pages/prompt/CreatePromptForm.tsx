import React from 'react'
import {Form, Select, TextArea} from "../../components";

const CreatePromptForm = () => {
    return <Form
        layout="vertical"
    >
        <div style={{ display: "flex", justifyContent: "space-between", gap: '24px' }}>
            <Form.Item
                label="Chain Name"
                name="chain"
                width="30%"
                required
            >
                <Select />
            </Form.Item>
            <Form.Item
                label="Tool Name"
                name="tool"
                width="30%"
                required
            >
                <Select />
            </Form.Item>
            <Form.Item
                label="Model Name"
                name="model"
                width="30%"
                required
            >
                <Select />
            </Form.Item>
        </div>
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
}

export default CreatePromptForm
