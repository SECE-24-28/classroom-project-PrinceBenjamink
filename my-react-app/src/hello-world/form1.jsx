// import React from "react";
// import { FormContainer } from "./form-style";

// const Form = () => {
//   return (
//     <FormContainer method="post" action="#">
//       <div className="form-group">
//         <label for="name">Name:</label>
//         <input type="text" id="name" minLength="5" required />
//       </div>

//       <div className="form-group">
//         <label for="mobile">Mobile:</label>
//         <input type="tel" id="mobile" required />
//       </div>

//       <button type="submit">Submit</button>
//     </FormContainer>
//   );
// };

// export default Form;


import React from "react";
import { HelloWorldStyle } from "./form-style.js";
const HelloWorldComponent = () => {
  return (
    <HelloWorldStyle>
        <div className="com">
        <h1>Welcome to Sri Eshwar</h1>
        <br />
        <form action="">
      <p>Select your language</p>
      <input type="radio" id="css" value="CSSAT" name="SelectLanguage" />
      <label for="css">CSS</label>
      <input type="radio" id="html" value="HTML" name="SelectLanguage" />
      <label for="html">HTML</label>
      
<br />
<br />
      <label for="name">Name</label>
      <input type="text" id="name" minlength="5" maxlength="100" required /><br /><br />
      <label for="email">Email</label>
      <input type="email" id="email" maxlength="100" /><br /><br />
      <label for="Mobile">Mobile</label>
      <input type="number" id="Mobile" pattern="[0-9]{10}" /><br /><br />

      <button type="submit">Submit</button>
    </form>
      <ol>
      <li>First</li>
      <li>Second</li>
      <li>Third</li>
    </ol>
    <ul>
      <li>First</li>
      <li>Second</li>
      <li>Third</li>
    </ul>
    <a href="https://www.google.com/" target="_blank">Google</a>
    <table border="1" cellspacing="0" cellpadding="5">
      <tr>
        <th colspan="2">Name</th>
        <th>Address</th>
      </tr>
      <tr>
        <td>Naveen</td>
        <td>Karthik</td>
        <td>Pudukottai</td>
      </tr>
    </table></div>

    <div className="square"></div>
    </HelloWorldStyle>
  );
};
export default HelloWorldComponent;