import styled from 'styled-components'
import {
    Typo_body_02,
    Typo_heading_06_bold,
} from '../../styles/constants/typogrphy'

export interface FlexProps {
    flexDirection?: 'column' | 'row'
    gap?: number
    alignItems?: 'flex-start' | 'center' | 'flex-end'
    justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between'
    padding?: string
    margin?: string
    width?: string
    height?: string
}

export interface DisabledContentProps {
    disabled?: boolean
}

export const S_FlexWrapper = styled.div<FlexProps>`
    display: flex;
    flex-direction: ${({ flexDirection }) => flexDirection};
    gap: ${({ gap }) => gap}px;
    align-items: ${({ alignItems }) => alignItems};
    justify-content: ${({ justifyContent }) => justifyContent};
    padding: ${({ padding }) => padding};
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    margin: ${({ margin }) => margin};
`
S_FlexWrapper.displayName = 'S_FlexWrapper'

export const S_DisabledContent = styled.div<DisabledContentProps>`
    ${({ disabled }) =>
        disabled
            ? ` pointer-events: none;
    background: rgba(211, 211, 211, 0.8);
    border-radius: var(--radius-02);
    opacity: 0.5;`
            : null}
`
S_DisabledContent.displayName = 'S_DisabledContent'

export const S_BoxContainer = styled.div`
    display: flex;
    border-radius: var(--radius-02);
    background-color: var(--blue-z-02);
    padding: var(--spacing-03);
    overflow-x: scroll;
`

export const S_UploadContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-02);
    border: 1px dashed var(--blue-z-02);
    width: 100%;
    height: 10rem;
    color: var(--blue-z-02);

    &:hover {
        border: 1px dashed var(--yellow-z-01);
        cursor: pointer;
        background: var(--blue-z-01);
        color: var(--yellow-z-01);
    }
`

export const S_PromptMainTitle = styled.h1`
    color: var(--blue-z-02);
    ${Typo_heading_06_bold};
`

export const S_PromptMainDescription = styled.p`
    color: var(--gray-06);
    ${Typo_body_02};
`

export const S_Description = styled.p`
    color: var(--text-helper);
`
