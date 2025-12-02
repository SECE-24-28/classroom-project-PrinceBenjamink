import styled from 'styled-components';
export const SquareStyle = styled.div`

  .container {
    display: flex;
    gap: 10px;    
    background: black;  
    height: 100vh;
    
    justify-content: flex-start;
    align-items: flex-start;

    justify-content: flex-start;
    align-items: flex-end;

    justify-content: flex-end;
    align-items: flex-start;

    justify-content: flex-end;
    align-items: flex-end;

    justify-content: center;
    align-items: flex-end;

    justify-content : flex-end;
    align-items: flex-start;

    
    justify-content: center;
    align-items: center;
    
    
    // justify-content: space-between;       //even space
    // justify-content: space-around;          //space around each box
    // justify-content: space-evenly;
    @media (max-width:600px){
        flex-direction:column;
    }
}

.box1 {
  width: 50px;
  height: 50px;
  margin: 10px;
  background: red;
  border-radius: 100px;
//   background: linear-gradient(
//     270deg,
//     red, orange, yellow
//   );
}
.box2 {
  width: 50px;
  height: 50px;
  margin: 10px;
  background: yellow;
  border-radius:100px;
}
.box3 {
  width: 50px;
  height: 50px;
  margin: 10px;
  background: green;
  border-radius: 100px;
}
.box4 {
  width: 50px;
  height: 50px;
  margin: 10px;
  background: blue;
  border-radius: 100px;

}

.rec{
    width: 100px;
    height: 50px;
    background-color: aqua;

    //reacting to size
    @media (max-width:900px){
    background-color:pink;
    // display:none
    }
}

`;