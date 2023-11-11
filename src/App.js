import {Routes, Route} from "react-router-dom"

import "./styles/style.scss";
import Layout from "./layout/Layout";
import Home from "./pages/Home";




function App() {
 
  return(
    <div className="App">
      <Routes>
        <Route path={''} element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          
        </Route>
      </Routes>
    </div>
  );
}

export default App;