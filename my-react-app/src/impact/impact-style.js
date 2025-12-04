import styled from "styled-components";

export const ImpactStyle = styled.div`
  .impact-section {
    position: relative;
    overflow: hidden;
    padding: 3rem 0px;
  }
  .heading {
    font-size: 40px;
    font-weight: 600;
    text-align: center;
    font-family: Inter, sans-serif;
    margin-bottom: 2rem;
  }
  .Glance {
    color: rgb(252, 41, 71);
  }
  .grid1,
  .grid2 {
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
    -webkit-box-pack: center;
    justify-content: center;
    margin-right: 30px;
    margin-bottom: 30px;
    @media (max-width: 920px) {
     padding: 0px 15px;
   }
}
  }
  //   div {
  //     display: block;
  //     unicode-bidi: isolate;
  //   }

  .grid-item1,
  .grid-item2,
  .grid-item3,
  .grid-item4 {
    position: relative;
    width: 450px;
    display: flex;
    padding: 1rem 1rem 0px;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    border-radius: 12px;
    font-family: Inter, sans-serif;
    overflow: visible;
    z-index: 1;
  }
  .grid-item1 {
    background-color: rgb(255, 223, 228);
  }
  .grid-item2 {
    background-color: rgb(226, 240, 250);
  }
  .grid-item3 {
    background-color: rgb(222, 255, 236);
  }
  .grid-item4 {
    background-color: rgb(255, 230, 199);
  }
    
img {
    overflow-clip-margin: content-box;
    overflow: clip;
}
  

  .number {
    font-size: 24px;
    font-weight: 700;
    margin: 0px;
    padding-bottom: 20px;
    color: rgb(0, 0, 0);
  }
  .details {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 5px;
    color: rgb(51, 65, 85);
  }
  .image {
    position: absolute;
    bottom: -25px;
    right: 20px;
    height: 120px;
    width: auto;
    object-fit: contain;
    z-index: 2;
  }
    .spiral {
    position: absolute;
    top: 50px;
    left: -110px;
    width: 200px;
    z-index: 0;

    @media (max-width: 920px) {
     display: none;
   }
}
`;


// import styled from "styled-components";

// export const ImpactWrapper = styled.div`
//   position: relative;
//   overflow: hidden;
//   padding: 3rem 0;
// `;

// export const SpiralDecorLeft = styled.img`
//   position: absolute;
//   top: 50px;
//   left: -110px;
//   width: 200px;
//   z-index: 0;

//   @media (max-width: 920px) {
//     display: none;
//   }
// `;

// export const ImpactHeading = styled.p`
//   font-size: 40px;
//   font-weight: 600;
//   text-align: center;
//   font-family: "Inter", sans-serif;
//   margin-bottom: 2rem;
//   @media (max-width: 920px) {
//     font-size: 24px;
//     font-weight: 600;
//   }
// `;

// export const RedText = styled.span`
//   color: #fc2947;
// `;

// export const WrapDiv = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 25px;
//   justify-content: center;
//   @media (max-width: 920px) {
//     padding: 0px 15px;
//   }
// `;

// export const ColorDiv = styled.div`
//   position: relative;
//   width: 450px;
//   display: flex;
//   padding: 1rem 1rem 0 1rem;
//   justify-content: space-between;
//   align-items: center;
//   border-radius: 12px;
//   font-family: "Inter", sans-serif;
//   overflow: visible;
//   z-index: 1;

//   &.pink {
//     background-color: #ffdfe4;
//   }

//   &.blue {
//     background-color: #e2f0fa;
//   }

//   &.green {
//     background-color: #deffec;
//   }

//   &.orange {
//     background-color: #ffe6c7;
//   }
// `;

// export const SectionHeading = styled.p`
//   font-size: 18px;
//   font-weight: 500;
//   margin-bottom: 5px;
//   color: #334155;

//   @media (max-width: 920px) {
//     font-size: 16px;
//   }
// `;

// export const SectionCount = styled.p`
//   font-size: 24px;
//   font-weight: 700;
//   margin: 0;
//   padding-bottom: 20px;
//   color: #000;

//   @media (max-width: 920px) {
//     font-size: 22px;
//   }
// `;

// export const IconSection = styled.img`
//   position: absolute;
//   bottom: -25px;
//   right: 20px;
//   height: 120px;
//   width: auto;
//   object-fit: contain;
//   z-index: 2;

//   @media (max-width: 920px) {
//     height: 90px;
//   }
// `;
