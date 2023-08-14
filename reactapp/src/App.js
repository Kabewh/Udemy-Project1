import { BrowserRouter, Routes, Route } from "react-router-dom";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";
import Sidebar from "./components/Sidebar";
import ButtonPage from "./components/Button";
import ModalPage from "./pages/ModalPage";

function App() {
  return (
    <>
      <Sidebar />
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/accordion" element={<AccordionPage />} />
            <Route path="/dropdown" element={<DropdownPage />} />
            <Route path="/buttons" element={<ButtonPage />} />
            <Route path="/modal" element={<ModalPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
export default App;
