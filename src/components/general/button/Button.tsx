import React from 'react'

import type { ButtonProps } from 'antd'

import S_Button from './Button.style'

const Button = ({ ...props }: ButtonProps) => {
    return <S_Button {...props} />
}

export default Button
