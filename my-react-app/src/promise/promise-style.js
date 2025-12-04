import styled from "styled-components";

export const PromiseStyle = styled.div`
  .promise-container {
    padding-block: 50px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: 1800px;
    margin: 1rem auto;
    border-radius: 10px;
    font-family: "Work Sans", sans-serif;
  }
  .title {
    font-weight: 600;
    font-size: 48px;
    text-align: center;
    font-family: "Work Sans", sans-serif;
  }

  .sub-title {
    font-size: 18px;
    text-align: center;
    margin-block: 8px;
    font-family: "Work Sans", sans-serif;
    font-weight: 500;
    color: rgb(86, 102, 131);
  }
  .element {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
  }
  .item {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    gap: 17px;
  }
  .element__item {
    border-top: 4px solid;
    display: flex;
    max-width: 380px;
    gap: 20px;
    flex-direction: column;
    border-radius: 0px 0px 10px 10px;
    padding: 1.5rem;
    background-color: rgb(255, 255, 255);
    position: relative;
  }
  .item__title {
    font-family: "Work Sans", sans-serif;
    font-weight: 600;
    font-size: 24px;
    color: rgb(119, 119, 119);
  }
 .element__content {
    font-family: "Work Sans", sans-serif;
    font-weight: 400;
    font-size: 18px;
    color: rgb(86, 102, 131);
    line-height: 1.3;
}
  svg:not(:root).svg-inline--fa,
  svg:not(:host).svg-inline--fa {
    overflow: visible;
    box-sizing: content-box;
  }
  .svg-inline--fa.fa-2xl {
    vertical-align: -0.3125em;
  }
  .fa-2xl {
    font-size: 2em;
    line-height: 0.03125em;
    vertical-align: -0.1875em;
  }
  .svg-inline--fa {
    display: var(--fa-display, inline-block);
    height: 1em;
    overflow: visible;
    vertical-align: -0.125em;
  }
  * {
    box-sizing: border-box;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  svg[Attributes Style] {
    color: rgb(68, 178, 179);
  }
  svg:not(:root) {
    overflow-clip-margin: content-box;
    overflow: hidden;
  }
    
`;
