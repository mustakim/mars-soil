import { EnumGender } from "./site.enum";

export interface IFormElements {
  Name: string;
  Email: string;
  Gender: EnumGender;
  Description: string;
  Password: string;
  Checkbox: boolean;
  Topic: ITopic;
}

export interface ITopic {
  name: string;
}

