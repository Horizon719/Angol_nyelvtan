import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Valaszto from "./pages/Valaszto";
import Rendez from "./pages/Rendez";
import Gepel from "./pages/Gepel";
import NoPage from "./pages/NoPage";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />} >
                        <Route index element={<Valaszto />} />
                        <Route path="gepel" element={<Gepel />} />
                        <Route path="rendez" element={<Rendez />} />
                        <Route path="*" element={<NoPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
