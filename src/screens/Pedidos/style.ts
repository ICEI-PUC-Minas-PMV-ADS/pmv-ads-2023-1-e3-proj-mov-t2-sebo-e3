import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Text = styled.Text`
    font-size: ${({ theme }) => theme.fonts.label}px;
    font-family: "Mulish";
`;

export const OrContainer = styled.View `
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const OrLine = styled.View `
    width: ${RFValue(312)}%;
    height: 1px;
    background-color: #dddddd;
`;

export const Title = styled.Text `
    font-size: ${({ theme }) => theme.fonts.titlecar}px;
    font-family: "Mulish";
    font-weight: bold;

    color: ${({ theme }) => theme.colors.title};
`;