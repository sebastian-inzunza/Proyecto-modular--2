import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./components/Index";
import LoginContent from "./components/Login";
import Register from "./components/Register";
import Menu from "./components/Menu";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route path="/loginUser" element={<LoginContent />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/Data' element={<Menu />}></Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
