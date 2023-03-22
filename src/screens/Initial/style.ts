import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Header = styled.View`
    padding: ${RFValue(88)}px ${RFValue(88)}px ${RFValue(52)}px;
`
export const SubTitle = styled.Text`
    font-size: ${({ theme }) => theme.fonts.label}px;
    text-align: center;

    padding: 0 ${RFValue(38)}px;
`
