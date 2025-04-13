import {S_FlexWrapper} from "../styles/Page.style";
import React from "react";
import EditPromptForm from "./components/form/EditPromptForm";
import {Button} from "../../components";

const EditPromptPage = () => {

    return <S_FlexWrapper
        flexDirection="column"
        gap={16}
        padding="16px"
    >
        <EditPromptForm />
        <S_FlexWrapper
            justifyContent="flex-end"
        >
            <Button type="primary" fixedSize>적용</Button>
        </S_FlexWrapper>
    </S_FlexWrapper>
}

export default EditPromptPage
