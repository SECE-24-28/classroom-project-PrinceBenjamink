import React from "react";
import TrustedByComponent from "./trusted-by/Trusted-By-Component.jsx";
import { TrustedByData } from "./trusted-by/data.js";
import { Routes, Route } from "react-router-dom";
import PromiseComponent from "./promise/Promise-Component.jsx";
import { OurpromisesData } from "./promise/data.js";
import HelloWorldComponent from "./hello-world/hello-world-component.jsx";
import PositionComponent from "./positioning/Position-Component.jsx";
import ImpactComponent from "./impact/Impact-Component.jsx";
import ExcellenceComponent from "./excellence/Excellence-Component.jsx";
import NotFoundComponent from "./404/404-component.jsx";
import NavBar from "./navbar/navbar-component.jsx";
import UseStateComponent from "./useState/use-state-component.jsx";
import UsestateformComponent from "./form/form-component.jsx";
import AdditionOperationComponent from "./addition-operation-in-state/addition-operation-in-state.jsx";
import SignUpComponent from "./sign-up-form/sign-up-component.jsx";
import FetchApiComponent from "./api-fetch/fetch-api-component.jsx";
import UseEffectComponent from "./use-effect-practice/use-effect-practice.jsx";
import UseEffectPracticeTwo from "./use-effect-practice/use-effect-practice-2.jsx";
import UseEffectApi from "./use-effect-practice/use-effect-api.jsx";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/promise" element={<><NavBar/><PromiseComponent data={OurpromisesData}/></>} />
        <Route path="/trusted" element={<><NavBar/><TrustedByComponent data={TrustedByData} color="black" size="50px"/></>} />
        <Route path="/position" element={<><NavBar/><PositionComponent/></>} />
        <Route path="/" element={<><NavBar/><HelloWorldComponent/></>} />
        <Route path="/impact" element={<><NavBar/><ImpactComponent/></>} />
        <Route path="/excellence/:id" element={<><NavBar/><ExcellenceComponent/></>} />
        <Route path="/user-state" element={<><NavBar/><UseStateComponent /></>} />
        <Route path="/use-state-form" element={<><NavBar/><UsestateformComponent/></>} />
        <Route path="/addition-operation-in-state" element={<><NavBar/><AdditionOperationComponent/></>}/>
        <Route path="/sign-up" element={<><NavBar/><SignUpComponent/></>}/>
        {/* <Route path="/use-effect" element={<><NavBar/><UseEffectComponent/><UseEffectPracticeTwo/></>}/> */}
        {/* <Route path="/use-effect" element={<><NavBar/><UseEffectPracticeTwo/></>}/> */}
        <Route path="/use-effect" element={<><NavBar/><UseEffectApi/></>}/>
        <Route path="/api-fetch" element={<><NavBar/><FetchApiComponent/></>}/>
        <Route path="*" element={<><NavBar/><NotFoundComponent/></>}/>
      </Routes>
    </div>
  );
}




























{/* <Route path="/trusted" element={<><PromiseComponent data={OurpromisesData}/><TrustedByComponent data={TrustedByData} color="black" size="50px"/></>}/>
  <Route path="/promise" element={<PromiseComponent data={OurpromisesData}/>}/>
  
  
  */}

{/* <PromiseComponent data={OurpromisesData} /> */}
{/* <PromiseComponent color= "rgb(68,178,179)" icon="faLaptopCode" title= "Top Code Quality" content="Our commitment goes beyond mere code — we deliver complete solutions with W3C-compliant, high-quality markup and zero compromise."/>
// import PromiseComponent from"./promise/Promise-Component.jsx";
<PromiseComponent color= "rgb(239,175,75)" icon="faMobile" title= "Responsive" content="We value positivity, timely responsiveness, and adaptability. We listen attentively and use our full capabilities to support you."/>
<PromiseComponent color= "rgb(0,189,235)" icon="faPeopleGroup" title= "Rockstar Team" content="Our expertise is our biggest strength. You get access to a seasoned, all-star team dedicated to delivering exceptional results."/>
<PromiseComponent color= "rgb(134,74,249)" icon="faRightFromBracket" title= "Fast Turn-arounds" content="Speed matters as much as quality. We're swift, agile, and capable of delivering high-quality code within your preferred timeline."/>
<PromiseComponent color= "rgb(252,41,71)" icon="faNetworkWired" title= "Life-time Support" content="Our commitment doesn't end with delivery. If any bugs appear in the future, you can always reach out — we’ve got your back."/>
<PromiseComponent color= "rgb(50,199,102)" icon="faShieldHalved" title= "Secured Agreement" content="Our commitment doesn't end with delivery. If any bugs appear in the future, you can always reach out — we’ve got your back."/> */}


{/* <PropsPractice name="Prince Benjamin K" mobile="12345678
 */}
// import PropsPractice from "./props-practice/props-practice.jsx";
{/* <PromiseComponent/>
<TrustedByComponent/> */}
// import TrustedByComponent from"./trusted-by/Trusted-By-Component.jsx";
// import PromiseComponent from"./promise/Promise-Component.jsx";
// import CourseComponent from "./course/course-component.jsx";
// import ImpactComponent from"./impact/Impact-Component.jsx";
// import OurPromisesComponent from"./promise/Promise-Component.jsx";
{/* <OurPromisesComponent/> */}
{/* <ImpactComponent/> */}
{/* <CourseComponent/> */}

// import Home from "./hello-world/Home";
// import FormPage from "./hello-world/FormPage";
// import SquareShape from "./hello-world/Square.jsx";
// import PositionComponent from "./positioning/Position-Component.jsx";
// import Flex from "./hello-world/Media.jsx";
// import ExcellenceComponent from"./excellence/Excellence-Component.jsx";
// import TrustedByComponent from"./trusted-by/Trusted-By-Component.jsx";
  // return <div>
    // <TrustedByComponent/>
    {/* <PositionComponent/> */}
    {/* <ExcellenceComponent/>
    <Flex/> */}
    {/* </div>; */}
  // return <Flex/>;
//   return (
//   <SquareShape/>
//  );
  // return (
  //   <Router>
  //     {/* Navigation menu */}
  //     <nav style={{ padding: "10px", background: "#f0f0f0" }}>
  //       <Link to="/" style={{ marginRight: "20px" }}>Home</Link>
  //       <Link to="/form">Form</Link>
  //     </nav>

  //     {/* Page Routes */}
  //     <Routes>
  //       <Route path="/" element={<Home />} />
  //       <Route path="/form" element={<FormPage />} />
  //     </Routes>
  //   </Router>
  // );

export default App;
