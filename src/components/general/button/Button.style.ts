import { Button } from 'antd'
import styled from 'styled-components'
import {Typo_label_01} from "../../../styles/constants/typogrphy";
import {ExtendButtonProps} from "./Button";

const S_Button = styled(Button)<ExtendButtonProps>`
    border-radius: var(--radius-01);
    background: ${({ type }) => type === 'primary' ? 'var(--blue-z-03)' : 'transparent' };
    width: ${({ fixedSize }) => fixedSize ? '10rem' : 'auto'};

    // todo 타입별 스타일, 각 hover 스타일 정의
    // background: var(--button-secondary);
    // border: 0;
    // border-radius: 0;
    // color: var(--text-on-color);
    // text-shadow: none;
    // ${Typo_label_01};
    // &.ant-btn-primary:not(.ant-btn-background-ghost) {
    //     background: var(--button-primary);
    //     &:hover {
    //         background: var(--button-primary-hover);
    //     }
    //     &:active {
    //         background: var(--button-primary-active);
    //     }
    // }
     &.ant-btn-text {
         background: transparent;
         color: var(--blue-z-03);
     }
    
    &.ant-btn-variant-text:not(:disabled):not(.ant-btn-disabled):hover {
        color: var(--yellow-z-01);
    }
    
    &.ant-btn-variant-solid:not(:disabled):not(.ant-btn-disabled):hover {
        background: var(--yellow-z-01);
    }
    // &.ant-btn-link {
    //     background: transparent;
    //     color: var(--link-primary);
    // }
    // &.ant-btn-background-ghost:not(.ant-btn-primary) {
    //     color: var(--icon-secondary);
    // }
    // &.ant-btn.ant-btn-background-ghost:not(.ant-btn-primary)[disabled] {
    //     color: var(--icon-on-color-disabled);
    // }
    // &.ant-btn-background-ghost.ant-btn-primary {
    //     color: var(--link-primary);
    //     border-color: var(--button-primary);
    //     &:hover {
    //         border-color: var(--button-primary-hover);
    //     }
    //     &:active {
    //         border-color: var(--button-primary-active);
    //     }
    // }
`
S_Button.displayName = 'S_Button'

export default S_Button
