import styled from "styled-components";
export const TrustedByStyle = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1800px;
  font-family: "Work Sans", sans-serif;
  .heading {
    font-weight: 600;
    font-size: ${props => props.size || "35px"};
    text-align: center;
    color: ${props => props.color || "red"};
  }
  .container {
    display: flex;
    justify-content: space-evenly;
    border-radius: 20px;
    gap: 2rem;
    flex-wrap: wrap;
    padding: 2rem 0px;
    margin
  }

  .box {
    position: relative;
    background-color: white;
    text-align: center;
    padding: 0.8rem;
    border-radius: 10px;
    z-index: 2;
    margin-top: 25px;
    
  }
  .box__content {
    position: relative;
    padding: 1rem;
    text-align: center;
    background-color: white;
    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 230px;
    height: 200px;
  }
  .box1,
  .box3,
  .box2,
  .box4 {
    border-radius: 10px;
    height: 50%;
    width: 100%;
    z-index: -1;
    left: 0px;
    right: 0px;
    position: absolute;
    top: initial;
    bottom: 0px;
  }
  .box2,
  .box4 {
    top: 0px;
    @media (max-width: 640px) {
      top: initial;
      bottom: 0px;}
  }

  .box1 {
    background-color: rgb(0, 197, 190);
  }
  .box2 {
    background-color: rgb(0, 189, 235);
  }
  .box3 {
    background-color: rgb(243, 176, 79);
  }
  .box4 {
    background-color: rgb(250, 63, 70);
  }
  
  .value {
    font-family: "Work Sans", sans-serif;
    font-size: 40px;
    font-weight: 900;
    color: gray;
    }
    .name {
      font-size: 20px;
      font-weight: 500;
      color: gray;
      text-transform: uppercase;
  }
  .circular__parent1,.circular__parent2,.circular__parent3,.circular__parent4 {
    position: absolute;
    left: 50%;
    top: 0;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.4rem;
    translate: -50% -50%;
  }
  .circular__parent2,
  .circular__parent4 {
    bottom: 0px ;
    translate: -50% 170%;
    @media (max-width: 640px) {
      top: 0;
      translate: -50% -50%;}
  }
  .circular__parent1 {
    background-color: rgb(0, 197, 190);
  }
  .circular__parent2 {
    background-color: rgb(0, 189, 235);
  }
  .circular__parent3 {
    background-color: rgb(243, 176, 79);
  }
  .circular__parent4 {
    background-color: rgb(250, 63, 70);
  }
  .circle {
    width: 65px;
    height: 65px;
    padding: 0.4rem;
    border-radius: 50%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.3);
  }
`;
