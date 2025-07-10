import React from 'react'
import S_Tag from './Tag.style'
import { TagProps } from 'antd'

const Tag = ({ ...props }: TagProps) => {
    return <S_Tag color="#8aaee0" {...props} />
}

export default Tag
