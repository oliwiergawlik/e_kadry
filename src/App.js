import {Route, Routes} from "react-router-dom";

import RequireAuth from "./components/auth/RequireAuth";
import NotFound from "./components/httpStatusCodes/NotFound";
import Login from "./components/auth/Login";
import HomeLayout from "./pages/HomeLayout";
import Page from "./pages/Page";

import "./styles/main.scss"
import Home from "./pages/Home";

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomeLayout/>}>
                <Route path="/" element={<Home/>}/>
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
