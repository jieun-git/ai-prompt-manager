import {Form} from 'antd'
import styled from 'styled-components'
import {Typo_label_02} from "../../../styles/constants/typogrphy";
import {ExtendedFormItemProps} from "./Form";

export const S_Form = styled(Form)`
    border: 2px solid var(--green-z-01);
    border-radius: var(--radius-02);
    padding: var(--spacing-04) var(--spacing-06);
`
S_Form.displayName = 'S_Form'

export const S_FormItem = styled(Form.Item)<ExtendedFormItemProps>`
        width: ${({ width }) => width} !important;

        .ant-form-item-label > label {
        color: var(--blue-z-02);
        ${Typo_label_02}

        &.ant-form-item-required::before {
                color: var(--yellow-z-01) !important;
        }
    }
`
S_FormItem.displayName = 'S_FormItem'
