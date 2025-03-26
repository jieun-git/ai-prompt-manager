import {S_Form, S_FormItem} from "./Form.style";
import React, { PropsWithChildren } from 'react'
import {FormProps, FormItemProps} from "antd";

export interface ExtendedFormItemProps extends FormItemProps {
    width?: string
}

const Form = ({ children, ...props }: PropsWithChildren<FormProps>) => {
    return <S_Form {...props}>{children}</S_Form>
}

const FormItem = ({ children, ...props }: ExtendedFormItemProps) => {
    return <S_FormItem {...props}>{children}</S_FormItem>
}

Form.Item = FormItem
export default Form
