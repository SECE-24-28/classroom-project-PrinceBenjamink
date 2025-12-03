import styled from "styled-components";

export const ExcellenceStyle = styled.div`
font-family: "Work Sans", normal, sans-serif;

.element{
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 2rem;
max-width: 1400px;
margin: auto;
}

.title{
font-weight: 600;
font-size: 48px;
text-align: center;
font-family: "Work Sans",normal, sans-serif;
}

.para{
    max-width: 900px;
    font-size: 20px;
    font-weight: 500;
    line-height: 1.8;
    font-family: "Work Sans", sans-serif;
    text-align: center;
    color: rgb(86, 102, 131);
}

.element__item--2{
    display: flex;
    gap: 2rem;
    max-width: 1280px;
    width: 95%;
    margin: 0px auto;
}

@media (max-width: 768px) {
.element__item--2{
flex-direction: column;
}
}

.divider{
    width: 0.5rem;
    background-color: rgb(221, 221, 221);
}

@media (max-width: 768px) {
.divider{
    width: 100%;
    height: 4px;
    background-color: rgba(221, 221, 221);
}
}

.vision{
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem;
}

.vision-title {
    color: rgb(243, 176, 79);
    border-left: 4px solid rgb(243, 176, 79);
    padding-left: 0.5rem;
    font-size: 32px;
    font-weight: 600;
    font-family: "Work Sans", sans-serif;
}

.v-para{
    font-size: 18px;
    font-weight: 500;
    line-height: 1.8;
    font-family: "Work Sans", sans-serif;
    color: rgb(86, 102, 131);
}

.mission{
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem;
}

.mission-title {
    color: rgb(0, 189, 235);
    border-left: 4px solid rgb(0, 189, 235);
    padding-left: 0.5rem;
    font-size: 32px;
    font-weight: 600;
    font-family: "Work Sans", sans-serif;
}

.m-para{
    font-size: 18px;
    font-weight: 500;
    line-height: 1.8;
    font-family: "Work Sans", sans-serif;
    color: rgb(86, 102, 131);
}


`;