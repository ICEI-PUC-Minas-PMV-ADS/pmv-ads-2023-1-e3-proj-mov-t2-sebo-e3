import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";


export const Header = styled.View `
    justify-content: flex-end;
    align-items: center;

    height: 10%;
    padding-bottom: 16px;
`;

export const Form = styled.View `
    width: 100%;
`;

export const SubTitle = styled.Text`
    font-size: ${({ theme }) => theme.fonts.subtitle}px;
    font-family: "Mulish";
    font-weight: 700;
    padding: 0 ${RFValue(0)}px;
`; 