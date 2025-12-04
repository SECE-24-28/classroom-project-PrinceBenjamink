import React from "react";
import { ImpactStyle } from "./impact-style.js";

const ImpactComponent = () => {
    return (
    <ImpactStyle>
    <div className="impact-section">
        <img src="https://aptitudeguruhem.com/static/media/Spiral.d128c4aa0751f3539470.png" alt="spiral" class="spiral"></img>
        <p className="heading">Impact at a <span className="Glance">Glance</span></p>
        <div>
        <div className="grid1">
            <div className="grid-item1">
                <div>
                <p className="details">Colleges</p>
                <p className="number">100+</p>
                </div>
                <img loading="lazy" src="https://aptitudeguruhem.com/static/media/school.534dd7db3daaf4c66eff.png" alt="Colleges" className="image"></img>
            </div>
            <div className="grid-item2">
                <div>
                <p className="details">Students</p>
                <p className="number">1,00,000</p>
                </div>
                <img loading="lazy" src="https://aptitudeguruhem.com/static/media/bag.52185bac9246c85ed48f.png" alt="Students" className="image"></img>
            </div>
        </div>
        <div className="grid2">
            <div className="grid-item3">
                <div>
                <p className="details">Study Materials</p>
                <p className="number">1000+</p>
                </div>
                <img loading="lazy" src="https://aptitudeguruhem.com/static/media/books.d290f0589bd8ed867b77.png" alt="Study Materials" class="image"></img>
            </div>
            <div className="grid-item4">
                <div>
                <p className="details">Professional Trainers</p>
                <p className="number">150</p>
                </div>
                <img loading="lazy" src="https://aptitudeguruhem.com/static/media/people.0b6f76ebbf0b209884e7.png" alt="Professional Trainers" class="image"></img>
            </div>
        </div>
        </div>
    </div>
    </ImpactStyle>
    );
};

export default ImpactComponent;


// import React from "react";
// import spiralLeft from "https://aptitudeguruhem.com/static/media/Spiral.d128c4aa0751f3539470.png";
// import school from "https://aptitudeguruhem.com/static/media/school.534dd7db3daaf4c66eff.png";
// import books from "https://aptitudeguruhem.com/static/media/bag.52185bac9246c85ed48f.pngg";
// import bag from "https://aptitudeguruhem.com/static/media/books.d290f0589bd8ed867b77.png";
// import people from "https://aptitudeguruhem.com/static/media/people.0b6f76ebbf0b209884e7.png";

// import {
//   ImpactWrapper,
//   SpiralDecorLeft,
//   ImpactHeading,
//   RedText,
//   WrapDiv,
//   ColorDiv,
//   SectionHeading,
//   SectionCount,
//   IconSection,
// } from "./impact-style.js";

// const ImpactComponent = () => {
//   return (
//     <ImpactWrapper>
//       <SpiralDecorLeft src={spiralLeft} alt="spiral" />
//       <ImpactHeading>
//         Impact at a <RedText>Glance</RedText>
//       </ImpactHeading>

//       <div>
//         <WrapDiv>
//           <ColorDiv className="pink">
//             <div>
//               <SectionHeading>Colleges</SectionHeading>
//               <SectionCount>100+</SectionCount>
//             </div>
//             <IconSection loading={"lazy"} src={school} alt="Colleges" />
//           </ColorDiv>
//           <ColorDiv className="blue">
//             <div>
//               <SectionHeading>Students</SectionHeading>
//               <SectionCount>1,00,000</SectionCount>
//             </div>
//             <IconSection loading={"lazy"} src={bag} alt="Students" />
//           </ColorDiv>
//         </WrapDiv>
//         <br />
//         <br />

//         <WrapDiv>
//           <ColorDiv className="green">
//             <div>
//               <SectionHeading>Study Materials</SectionHeading>
//               <SectionCount>1000+</SectionCount>
//             </div>
//             <IconSection loading={"lazy"} src={books} alt="Study Materials" />
//           </ColorDiv>
//           <ColorDiv className="orange">
//             <div>
//               <SectionHeading>Professional Trainers</SectionHeading>
//               <SectionCount>150</SectionCount>
//             </div>
//             <IconSection loading={"lazy"} src={people} alt="Professional Trainers" />
//           </ColorDiv>
//         </WrapDiv>
//       </div>
//       <br />
//     </ImpactWrapper>
//   );
// };

// export default ImpactComponent;
