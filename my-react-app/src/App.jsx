import React from "react";
// import Home from "./hello-world/Home";
// import FormPage from "./hello-world/FormPage";
// import SquareShape from "./hello-world/Square.jsx";
// import PositionComponent from "./positioning/Position-Component.jsx";
// import Flex from "./hello-world/Media.jsx";
// import ExcellenceComponent from"./excellence/Excellence-Component.jsx";
import TrustedByComponent from"./trusted-by/Trusted-By-Component.jsx";
function App() {
  return <div>
    <TrustedByComponent/>
    {/* <PositionComponent/> */}
    {/* <ExcellenceComponent/>
    <Flex/> */}
    </div>;
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
}

export default App;
