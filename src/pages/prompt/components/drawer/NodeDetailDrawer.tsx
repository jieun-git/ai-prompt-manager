import { Drawer } from '../../../../components'
import React from 'react'
import { NodeData } from '../table/PromptManageTable'
import {
    S_FlexWrapper,
    S_PromptDetailContent,
    S_PromptListContent,
} from '../../../styles/Page.style'

interface NodeDetailDrawerProps {
    openDrawer: boolean
    selectedRow: NodeData | undefined
    onClose: () => void
}

const NodeDetailDrawer = ({
    openDrawer,
    selectedRow,
    onClose,
}: NodeDetailDrawerProps) => {
    const PromptListContent = () => {
        return <S_PromptListContent>List</S_PromptListContent>
    }

    const PromptDetailContent = () => {
        return <S_PromptDetailContent>Detail</S_PromptDetailContent>
    }

    return (
        <Drawer
            open={openDrawer}
            title={selectedRow?.name}
            size="large"
            onClose={onClose}
        >
            <S_FlexWrapper flexDirection="row" height="100%" padding="0 24px">
                {PromptListContent()}
                {PromptDetailContent()}
            </S_FlexWrapper>
        </Drawer>
    )
}

export default NodeDetailDrawer
