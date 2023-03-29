import { Routes, Route } from "react-router-dom";
import DashboardPage from "./Pages/DashboardPage";
import HomePage from "./Pages/HomePage";
import TeamPage from "./Pages/TeamPage";
function App() {
    return (
        // NOTE: this is version 6, if you are getting error regarding
        //router then google it with respect to version 6
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/team" element={<TeamPage />} />

            {/* make this route as protected */}
            <Route path="/dashboard" element={<DashboardPage />} />
            
        </Routes>
    );
}

export default App;
