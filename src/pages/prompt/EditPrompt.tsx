import { S_FlexWrapper } from '../styles/Page.style'
import React from 'react'
import EditPromptForm from './components/form/EditPromptForm'
import { Button, Layout } from '../../components'

const EditPromptPage = () => {
    return (
        <Layout menuKey="prompt/manage" headerTitle={<span>Manage</span>}>
            <S_FlexWrapper flexDirection="column" gap={16}>
                <EditPromptForm />
                <S_FlexWrapper justifyContent="flex-end">
                    <Button type="primary" fixedSize>
                        적용
                    </Button>
                </S_FlexWrapper>
            </S_FlexWrapper>
        </Layout>
    )
}

export default EditPromptPage
