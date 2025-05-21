import React from 'react'
import { S_FlexWrapper, S_UploadContainer } from '../../../styles/Page.style'

import { Upload, Form, Input, Button, Tooltip } from '../../../../components'
import { S_FormTitle } from '../../../../components/data-entry/form/Form.style'
import { PlusCircleOutlined } from '@ant-design/icons'

const UploadDataSetForm = () => {
    return (
        <S_FlexWrapper flexDirection="column" gap={8} width="500px">
            <S_FormTitle>Upload DataSet</S_FormTitle>
            <Form layout="vertical">
                <Form.Item label="" name="csv" required width="100%">
                    <Upload>
                        <S_UploadContainer>
                            <Tooltip title="Upload CSV">
                                <PlusCircleOutlined
                                    style={{ fontSize: '20px' }}
                                />
                            </Tooltip>
                        </S_UploadContainer>
                    </Upload>
                </Form.Item>
                <Form.Item label="데이터 이름" name="dataName" required>
                    <Input placeholder="이름을 입력하세요." />
                </Form.Item>
                <S_FlexWrapper justifyContent="flex-end">
                    <Button type="primary" fixedSize>
                        업로드
                    </Button>
                </S_FlexWrapper>
            </Form>
        </S_FlexWrapper>
    )
}

export default UploadDataSetForm
