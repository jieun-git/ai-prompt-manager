import React from 'react'
import CreatePromptForm from "./CreatePromptForm";
import RunPromptForm from "./RunPromptForm";
import {Button} from "../../components";
import {S_FlexWrapper} from "../styles/Page.style";

const CreatePrompt = () => {
    return <S_FlexWrapper
        flexDirection="column"
        gap={16}
        padding="16px"
    >
        <CreatePromptForm />
        <RunPromptForm />
        <S_FlexWrapper
            justifyContent="flex-end"
        >
            <Button type="primary" fixedSize>저장</Button>
        </S_FlexWrapper>
    </S_FlexWrapper>
}

export default CreatePrompt
