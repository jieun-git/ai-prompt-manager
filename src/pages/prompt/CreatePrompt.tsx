import React from 'react'
import CreatePromptForm from './components/form/CreatePromptForm'
import { Button, Layout } from '../../components'
import { S_FlexWrapper } from '../styles/Page.style'

const CreatePrompt = () => {
    return (
        <Layout
            menuKey="prompt/create"
            headerTitle={<span>Create Prompt</span>}
        >
            <S_FlexWrapper flexDirection="column" gap={16}>
                <CreatePromptForm />
                <Button type="primary">Create prompt</Button>
            </S_FlexWrapper>
        </Layout>
    )
}

export default CreatePrompt
