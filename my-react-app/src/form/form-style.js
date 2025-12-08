import styled from "styled-components";

export const FormStyle = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;

  h1 {
    text-align: center;
    margin-bottom: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 350px;
    background: #f9f9f9;
    padding: 25px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
  }

  label {
    margin-bottom: 6px;
    font-weight: 600;
  }

  input {
    padding: 10px;
    margin-bottom: 18px;
    border: 1px solid #ccc;
    border-radius: 6px;
    width: 95%;
    margin-right: 20px;
  }

  button {
    padding: 12px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 10px;
  }

  button:hover {
    background-color: #218838;
  }
`;
