import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import { routes } from "./routes"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                {routes.map((route) => (
                    <Route
                        key={route.id}
                        path={route.routes}
                        element={route.element}
                    />
                ))}

                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
