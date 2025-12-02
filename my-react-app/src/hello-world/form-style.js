// import styled from "styled-components";

// export const FormContainer = styled.form`
//   width: 320px;
//   padding: 20px;
//   margin: 20px auto;
//   background: #f7f7f7;
//   border-radius: 10px;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

//   .form-group {
//     margin-bottom: 15px;
//   }

//   label {
//     font-size: 16px;
//     font-weight: 500;
//   }

//   input {
//     width: 100%;
//     margin-top: 5px;
//     padding: 8px;
//     border-radius: 5px;
//     border: 1px solid #ccc;
//   }

//   button {
//     margin-top: 10px;
//     padding: 10px 15px;
//     background: #4a90e2;
//     border: none;
//     border-radius: 6px;
//     color: white;
//     font-size: 16px;
//     cursor: pointer;
//     font-weight: 600;
//   }

//   button:hover {
//     background: #357ac8;
//   }
// `;

import styled from "styled-components";

export const HelloWorldStyle = styled.div`
  background-color: #f5f5f5;
  padding: 30px;
  font-family: Arial, sans-serif;

  .com {
    max-width: 800px;
    margin: 0 auto;
    background: #ffffff;
    padding: 25px 30px;
    border-radius: 10px;
    box-shadow: 0 0 15px rgba(0,0,0,0.1);
  }

  h1 {
    text-align: center;
    color: #333;
  }

  form {
    margin-top: 20px;
  }

  p {
    font-weight: bold;
    margin-bottom: 8px;
  }

  input[type="text"],
  input[type="email"],
  input[type="number"] {
    width: 100%;
    padding: 10px;
    margin: 6px 0 12px 0;
    border-radius: 6px;
    border: 1px solid #ccc;
    font-size: 16px;
    box-sizing: border-box;
  }

  input[type="radio"] {
    margin-right: 6px;
  }

  label {
    margin-right: 15px;
    font-weight: 500;
  }

  button {
    padding: 12px 20px;
    background-color: #007bff;
    border: none;
    border-radius: 6px;
    color: white;
    font-size: 16px;
    cursor: pointer;
  }

  button:hover {
    background-color: #0056b3;
  }

  ol, ul {
    margin-top: 20px;
    padding-left: 20px;
  }

  a {
    display: inline-block;
    margin-top: 15px;
    color: #007bff;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  table {
    width: 100%;
    margin-top: 20px;
    border-collapse: collapse;
  }

  th, td {
    border: 1px solid #999;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f0f0f0;
  }
    h1{
    color:red;
    }
`;
