import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./components/Index";
import LoginContent from "./components/Login";
import Register from "./components/Register";
import Menu from "./components/Menu";
import PageDeportes from "./components/pages/PageDeportes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route path="/loginUser" element={<LoginContent />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/Data' element={<Menu />}></Route>
          <Route path='/deportes' element={<PageDeportes />}></Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
