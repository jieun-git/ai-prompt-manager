import React from 'react'
import CreatePromptForm from './components/form/CreatePromptForm'
import RunPromptForm from './components/form/RunPromptForm'
import { Button, Layout } from '../../components'
import { S_FlexWrapper } from '../styles/Page.style'

const CreatePrompt = () => {
    return (
        <Layout menuKey="prompt/create" headerTitle={<span>Create</span>}>
            <S_FlexWrapper flexDirection="column" gap={16}>
                <CreatePromptForm />
                <RunPromptForm />
                <S_FlexWrapper justifyContent="flex-end">
                    <Button type="primary" fixedSize>
                        저장
                    </Button>
                </S_FlexWrapper>
            </S_FlexWrapper>
        </Layout>
    )
}

export default CreatePrompt
