import Route from "./components/Route";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";
import Sidebar from "./components/Sidebar";
import ButtonPage from "./components/Button";

function App() {
  return (
    <div>
      <Sidebar />
      <div>
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/">
          <DropdownPage />
        </Route>
        <Route path="/buttons">
          <ButtonPage />
        </Route>
      </div>
    </div>
  );
}
export default App;
