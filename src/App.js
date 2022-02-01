import React from "react";
import './componat/css/App.css';
import Home from "./componat/Home"
import Services from "./componat/Services";
import {Route,Switch} from "react-router-dom";
import Cleaning from "./componat/Cleaning";
function App() {
  return (
  <div>
      <Home/>

        <Switch>
        <Route exact path="/cleaning" component={Cleaning} /> 
      {/*   <Route exact path="/" component={Home} ></Route> */}
        {/* <Route exact path="/events" component={Events} /> */}
        <Route  path="/Services" component={Services} />
        {/* {<Route exact path="/services/repair" component={Repair} />}
        /* <Route exact path="/services/painting" component={Painting} /> */
        
 
        /* <Route path="/about" component={About} />
        <Route  path="/myBooking" component={MyBooking} />
        <Route path="/posts/:postId" component={PostDetail} /> */}
        {/* <Redirect to="/" /> */}
      </Switch>
     
   </div>
  
  );
}

export default App;
