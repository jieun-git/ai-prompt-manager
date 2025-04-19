import React, {useState} from 'react'
import {Form, Select, Segmented, Button} from "../../../../components";
import {S_FlexWrapper} from "../../../styles/Page.style";
import {S_FormTitle} from "../../../../components/data-entry/form/Form.style";
import {TableOutlined, EyeOutlined} from "@ant-design/icons";
import PromptSummaryTable from "../table/PromptSummaryTable";
import PromptDetail from "../../PromptDetail";


const CreatePromptForm = () => {
    const [mode, setMode] = useState<string | number>('summary')
    const ViewModeOptions = [
        { value: 'summary', icon: <TableOutlined /> },
        { value: 'detail', icon: <EyeOutlined /> },
    ]

    const handleChangeMode = (value: string | number) => {
        setMode(value)
    }

    console.log(mode)

    return <div>
        <S_FormTitle>View/Edit</S_FormTitle>
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
            <S_FlexWrapper
                flexDirection="column"
                gap={8}
            >
                <Segmented options={ViewModeOptions} onChange={handleChangeMode} />
                {mode === 'summary' ? <PromptSummaryTable /> : <PromptDetail />}
            </S_FlexWrapper>
            {/*<Form.Item*/}
            {/*    label="System prompt"*/}
            {/*    name="system"*/}
            {/*    required*/}
            {/*>*/}
            {/*    <TextArea height={80} resize={false} placeholder="// Required" />*/}
            {/*</Form.Item>*/}
            {/*<Form.Item*/}
            {/*    label="User prompt"*/}
            {/*    name="user"*/}
            {/*    required*/}
            {/*>*/}
            {/*    <TextArea height={80} resize={false} placeholder="// Required" />*/}
            {/*</Form.Item>*/}
            {/*<Form.Item*/}
            {/*    label="Assistant prompt"*/}
            {/*    name="assistant"*/}
            {/*>*/}
            {/*    <TextArea height={80} resize={false} placeholder="// Optional" />*/}
            {/*</Form.Item>*/}
        </Form>
    </div>
}

export default CreatePromptForm
