import { BrowserRouter, Routes, Route } from "react-router-dom";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";
import Sidebar from "./components/Sidebar";
import ButtonPage from "./components/Button";
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";
import CounterPage from "./pages/CounterPage";

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
            <Route path="/table" element={<TablePage />} />
            <Route
              path="/counter"
              element={<CounterPage initialCount={10} />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
export default App;
