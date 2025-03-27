import styled from 'styled-components'

export interface FlexProps {
    flexDirection?: 'column' | 'row';
    gap?: number
    alignItems?: 'flex-start' | 'center' | 'flex-end'
    justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between'
    padding?: string
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

`
S_FlexWrapper.displayName = 'S_FlexWrapper'

export const S_DisabledContent = styled.div<DisabledContentProps>`
    ${({ disabled }) => disabled ? ` pointer-events: none;
    background: rgba(211, 211, 211, 0.8);
    border-radius: var(--radius-02);
    opacity: 0.5;` : null}
   

`
S_DisabledContent.displayName = 'S_DisabledContent'
