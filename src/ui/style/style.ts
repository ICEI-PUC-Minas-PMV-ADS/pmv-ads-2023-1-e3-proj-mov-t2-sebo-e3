import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

interface ILogoContainer {
    wdt: number,
    hgt: number
}

export const ViewContainer = styled.ScrollView `
flex: 1;
    padding: 0 ${RFValue(24)}px;
`;

export const LogoContainer = styled.View<ILogoContainer>`
    width: ${({ wdt }) => RFValue(wdt)}px;
    height: ${({ hgt }) => RFValue(hgt)}px;
    border-radius: ${({ radius }) => RFValue(radius)}px;
    background-color: ${({ theme }) => theme.colors.shape};
    margin: auto;
`;

export const Title = styled.Text `
    text-align: center;
    font-size: ${({ theme }) => theme.fonts.title}px;
    color: ${({ theme }) => theme.colors.title};
    font-weight: 700;
`;