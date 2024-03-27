import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from "./Pages/Home";
/* import { Login } from "./Pages/Login"; */

const Router = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/contato" element={<Login />} /> */}
        </Routes>
      </BrowserRouter>
    )
}
  
export default Router;