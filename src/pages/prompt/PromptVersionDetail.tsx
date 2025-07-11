import React from 'react'
import {
    S_FlexWrapper,
    S_PromptVersionDetail,
    S_PromptVersionDetailContent,
    S_PromptVersionDetailHeader,
} from '../styles/Page.style'
import {
    DeleteOutlined,
    CopyOutlined,
    // ThunderboltOutlined,
    // ThunderboltFilled,
} from '@ant-design/icons'
import { Tag, Descriptions, Button, Tooltip } from '../../components'
import { message } from 'antd'

interface PromptVersionDetailProps {
    versionDetail: any
    defaultProduction: string
    onChangeDefaultProduction: (version: string) => void
}

const PromptVersionDetail = ({
    defaultProduction,
    versionDetail,
    onChangeDefaultProduction,
}: PromptVersionDetailProps) => {
    const [messageApi, contextHolder] = message.useMessage()

    const { version, name, prompt } = versionDetail

    const handleClickDelete = () => {
        // prompt 삭제 -> 왼쪽 타임라인에서도 제거 되어야 함
    }

    const handleClickCopy = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text)
            messageApi.open({
                type: 'success',
                content: 'Copied! 🎉',
            })
        } catch (err) {
            messageApi.open({
                type: 'success',
                content: 'Copy failed 😞',
            })
        }
    }

    const handleClickProduction = (ver: string) => {
        onChangeDefaultProduction(ver)
    }

    const itemArr = ['System', 'User', 'Assistant']

    const items: any = itemArr.map((item) => {
        return {
            label: item,
            span: 'filled',
            children: (
                <S_FlexWrapper
                    alignItems="center"
                    justifyContent="space-between"
                >
                    {prompt[item?.toLowerCase()]}
                    <Button
                        type="text"
                        onClick={() =>
                            handleClickCopy(prompt[item?.toLowerCase()])
                        }
                    >
                        <CopyOutlined />
                    </Button>
                </S_FlexWrapper>
            ),
        }
    })

    return (
        <>
            {contextHolder}
            <S_PromptVersionDetail>
                <S_PromptVersionDetailHeader>
                    <S_FlexWrapper
                        width="100%"
                        alignItems="center"
                        justifyContent="space-between"
                    >
                        <S_FlexWrapper alignItems="center">
                            <Tag type="outline">ver.{version}</Tag>
                            {name}
                            <Tooltip title="Production">
                                <Button
                                    type="text"
                                    onClick={() =>
                                        handleClickProduction(version)
                                    }
                                >
                                    {/*{defaultProduction === version ? (*/}
                                    {/*    <ThunderboltFilled />*/}
                                    {/*) : (*/}
                                    {/*    <ThunderboltOutlined />*/}
                                    {/*)}*/}
                                </Button>
                            </Tooltip>
                        </S_FlexWrapper>
                        <Tooltip title="Delete Prompt">
                            <Button type="text" onClick={handleClickDelete}>
                                <DeleteOutlined />
                            </Button>
                        </Tooltip>
                    </S_FlexWrapper>
                </S_PromptVersionDetailHeader>
                <S_PromptVersionDetailContent>
                    <Descriptions bordered items={items} />
                </S_PromptVersionDetailContent>
            </S_PromptVersionDetail>
        </>
    )
}

export default PromptVersionDetail
