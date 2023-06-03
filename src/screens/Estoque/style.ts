import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const SubTitle = styled.Text`
  font-size: ${({ theme }) => theme.fonts.label}px;
`;

export const OrContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const OrLine = styled.View`
  width: ${RFValue(312)}%;
  height: 1px;
  background-color: #000;
`;

export const OrTitle = styled.Text`
  margin: ${({ theme }) => theme.margin.ls}px;
  padding-bottom: ${({ theme }) => theme.padding.ls}px;
  font-size: ${({ theme }) => RFValue(theme.fonts.label)}px;
  font-family: "Mulish";
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.fonts.title}px;
  font-family: "Mulish";
  font-weight: 500;
  color: ${({ theme }) => theme.colors.title};
`;

export const SearchBarEdit = styled.View`
  flex-direction: row;
`;

export const SearchBarInput = styled.View`
  width: 100%;
  padding: 13px 20px;

  font-size: ${({ theme }) => RFValue(theme.fonts.label)}px;
  color: ${({ theme }) => theme.colors.text_dark};

  width: 100%;
  padding: 13px 20px;

  font-size: ${({ theme }) => RFValue(theme.fonts.label)}px;
  color: ${({ theme }) => theme.colors.text_dark};

  background-color: ${({ theme }) => theme.colors.background};
  border: 1px;
  border-radius: ${({ theme }) => theme.radius.xs}px;
  border-color: ${({ theme }) => theme.colors.text};
`;

export const List = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 16px;
`;

export const ListButton = styled.TouchableOpacity`
  border-width: 1px;
  padding: 4px 12px;
  border-radius: 16px;
`;
