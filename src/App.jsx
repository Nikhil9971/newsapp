import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "../components/Main/Main";
import { BrowserRouter } from "react-router-dom";
import Details from "../components/Details/Details";
import Auth from "../components/Auth/Auth";
import Signin from "../components/Signin/Signin";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/:index" element={<Details />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
