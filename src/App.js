import {Route, Routes} from "react-router-dom";

import RequireAuth from "./components/auth/RequireAuth";
import NotFound from "./components/httpStatusCodes/NotFound";
import Login from "./components/auth/Login";
import Home from "./pages/Home";
import Page from "./pages/Page";

import "./styles/main.scss"

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}>
                <Route path="/" element={<div>Home</div>}/>
                <Route path="*" element={<NotFound/>}/>
            </Route>
            <Route path='/' element={<Page/>}>
                <Route element={<RequireAuth/>}>
                    <Route path='/import' element={<div>import</div>}/>
                    <Route path='/profil' element={<div>profil</div>}/>
                </Route>
            </Route>

            <Route path="/login" element={<Login/>}/>
        </Routes>
    )
}

export default App;
