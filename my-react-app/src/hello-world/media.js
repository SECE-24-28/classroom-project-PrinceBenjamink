import styled from "styled-components";
export const MediaStyle = styled.div`
    
  .capsule {
    background-color: rgb(252, 41, 71);
    border-radius: 200px;
    max-width: 1300px;
    margin: 50px auto;    
    padding: 2rem;
    margin-top: 50px;
    align-items: center;
    font-family: "Work Sans", sans-serif;
    @media (max-width: 768px) {
      padding: 1rem;
      border-radius: 10px;
    }
  }
  .heading {
    color: white;
    font-size: 32px;
    color: white;
    font-weight: 600;
    text-align: center;
  }
  .sub__heading {
    font-weight: 500;
    font-size: 20px;
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
    color: white;
  }
`;


