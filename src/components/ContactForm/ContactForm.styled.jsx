import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const MainForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 4px solid red;
  padding: 20px;
  border-radius: 10px;
`;

export const Label = styled.label`
  display: flex;
  justify-content: space-between;
`;

export const Input = styled(Field)`
  margin-left: 40px;
  font-size: 17px;
  height: 25px;
`;

export const Button = styled.button`
padding: 10px;
  border-radius: 5px;
  font-size: 17px;
  &:hover {
    background-color: red;
  }
`;