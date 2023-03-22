import styled from 'styled-components/native'

export const Label = styled.Text`
    font-size: ${({ theme }) => theme.fonts.label}px;
    margin-bottom: ${({ theme }) => theme.margin.ls}px;
`;