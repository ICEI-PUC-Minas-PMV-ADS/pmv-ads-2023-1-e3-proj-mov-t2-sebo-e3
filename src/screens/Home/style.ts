import styled from "styled-components/native";

export const LogoImage = styled.Image`
  margin: ${({ theme }) => theme.margin.xs}px auto;
`;

export const Card = styled.View`
  width: 115px;
  height: 185px;
  margin-right: ${({ theme }) => theme.margin.lx}px;
  align-items: center;
`;

export const Main = styled.View`
  align-items: flex-start;
  gap: 8px;
`;

export const BookText = styled.Text`
  font-size: ${({ theme }) => theme.fonts.label}px;
  font-family: "Mulish";
  color: ${({ theme }) => theme.colors.text};
`;
