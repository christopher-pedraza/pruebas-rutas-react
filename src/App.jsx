import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Navigate,
} from "react-router-dom";

import Home from "./pages/Home/Home";
import Datos from "./pages/Datos/Datos";
import Header from "./pages/Header/Header";
import Footer from "./pages/Footer/Footer";
import Estadisticas from "./pages/Estadisticas/Estadisticas";
import Login from "./pages/Login/Login";

function App() {
    const user = false;
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/datos" element={<Datos />} />
                <Route path="/login" element={<Login />} />
                <Route
                    path="/estadisticas"
                    element={
                        user ? (
                            <Estadisticas />
                        ) : (
                            <Navigate replace to="/login" />
                        )
                    }
                />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
