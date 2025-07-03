import { BrowserRouter, Route, Routes } from "react-router-dom";
import WelcomePage from "./component/WelcomePage";
import GraduationDetails from "./component/GraduationDetails";

function App() {
    return (
        <BrowserRouter basename="/invitation">
            <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route path="/details" element={<GraduationDetails />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
