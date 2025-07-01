import { BrowserRouter, Route, Routes } from "react-router-dom";
import WelcomePage from "./component/WelcomePage";
import GraduationDetails from "./component/GraduationDetails";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/graduation" element={<WelcomePage />} />
                <Route path="/details" element={<GraduationDetails />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
