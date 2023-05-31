import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { IBackButton } from ".";
import { RFValue } from "react-native-responsive-fontsize";


export const Container = styled(TouchableOpacity)<IBackButton>`
    width: 30%;
    padding: 0px;

    border: 2px;
    border-radius: ${({ theme }) => theme.radius.xs}px;
    border-color: transparent;
    background-color: "transparent";
`;

export const Title = styled.Text `
    color: ${({ theme }) => theme.colors.background};
    font-size: ${({ theme }) => RFValue(theme.fonts.label)}px;
    margin: auto;
`