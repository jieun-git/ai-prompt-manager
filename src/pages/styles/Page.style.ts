import styled from 'styled-components'

export interface Flex {
    flexDirection?: 'column' | 'row';
    gap?: number
    alignItems?: 'flex-start' | 'center' | 'flex-end'
    justifyContent?: 'flex-start' | 'center' | 'flex-end'
}

export const S_FlexWrapper = styled.div<Flex>`
    display: flex;
    flex-direction: ${({ flexDirection }) => flexDirection};
    gap: ${({ gap }) => gap}px;
    align-items: ${({ alignItems }) => alignItems};
    justify-content: ${({ justifyContent }) => justifyContent};
`
S_FlexWrapper.displayName = 'S_FlexWrapper'
