import styled from "styled-components";
export const MediaStyle = styled.div`
    // margin-top: 100px;
    .container{
        font-family: Work Sans, normal, sans-serif;
        display: flex;
        background-color: rgb(252, 41, 71);
        width: 100%;
        height: 100%;
        border-radius:200px;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        @media (max-width: 768px) {
            border-radius:10px;
        }           

    }
    .p1{
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        margin: 10px;
        padding: 10px;
        font-weight: bold;
        padding-bottom: 0px;
        color: white;
        font-size: 24px;

    }
        .p2{
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        margin: 10px;
        padding: 10px;
        padding-top: 0px;
        font-weight: lighter;
        margin-left: 100px;
        margin-right: 100px;
        color: white;
        font-size: 18px;
        
        }
`;   