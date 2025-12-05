import React from "react";
import { TrustedByStyle } from "./trusted-by-style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TrustedByData } from "./data";
const TrustedByComponent = () => {
  return (
    <TrustedByStyle>
      <div className="heading">
        <h2>Trusted By</h2>
      </div>
      <div className="container">
        {TrustedByData.map((item, index) => {
          return (
            <div className="box" key={index}>
              <div className="box__content">
                <div className={item.circular__parent}>
                  <div className="circle">
                    <FontAwesomeIcon
                      icon={item.icon}
                      color={item.color}
                      fontSize="30px"
                    />
                  </div>
                </div>
                <div className="value">{item.value}</div>
                <div className="name">{item.name}</div>
                <div style={{ color: item.color , fontSize: "16px", fontWeight: "100px"}}>{item.detail}</div>
              </div>
              <div className={item.boxClass}></div>
            </div>
          );
        })}
      </div>
    </TrustedByStyle>
  );
};

export default TrustedByComponent;

// import React from "react";
// import { PostionExampleStyle } from "./trusted-by-style";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBuildingColumns } from "@fortawesome/free-solid-svg-icons";
// const PositionExampleComponent = () => {
//   return (
//     <PostionExampleStyle>
//       <div className="container">

//         <div className="box">
//           <div className="box__content">
//             <div className="circular__parent">
//               <div className="circle">
//                 <FontAwesomeIcon icon={faBuildingColumns} color="aqua" fontSize="30px"/>
//               </div>
//             </div>
//             <div className="value">100</div>
//             <div className="name">Colleges</div>
//           </div>
//           <div className="box__color"></div>
//         </div>

//         <div className="box">
//           <div className="box__content">
//             <div className="circular__parent">
//               <div className="circle">
//                 <FontAwesomeIcon icon={faBuildingColumns} color="aqua" fontSize="30px"/>
//               </div>
//             </div>
//             <div className="value">100</div>
//             <div className="name">Colleges</div>
//           </div>
//           <div className="box__color"></div>
//         </div>
//         <div className="box">
//           <div className="box__content">
//             <div className="circular__parent">
//               <div className="circle">
//                 <FontAwesomeIcon icon={faBuildingColumns} color="aqua" fontSize="30px"/>
//               </div>
//             </div>
//             <div className="value">100</div>
//             <div className="name">Colleges</div>
//           </div>
//           <div className="box__color"></div>
//         </div>
//         <div className="box">
//           <div className="box__content">
//             <div className="circular__parent">
//               <div className="circle">
//                 <FontAwesomeIcon icon={faBuildingColumns} color="aqua" fontSize="30px"/>
//               </div>
//             </div>
//             <div className="value">100</div>
//             <div className="name">Colleges</div>
//           </div>
//           <div className="box__color"></div>
//         </div>
//       </div>
//     </PostionExampleStyle>
//   );
// };
// export default PositionExampleComponent;
