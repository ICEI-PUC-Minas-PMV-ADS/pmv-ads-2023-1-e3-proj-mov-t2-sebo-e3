import React from "react";
import { Label } from "./style";

export interface ILabel {
  title: string;
}

function ButtonSecundary({ title }: ILabel) {
  return (
    <Label>
      {title}
    </Label>
  );
}

export default ButtonSecundary;
