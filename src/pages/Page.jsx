import {Outlet} from 'react-router-dom';

import Nav from "../components/nav/Nav";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

function Page() {
    return (
        <>
            <Header/>
            <Nav/>
            <Outlet/>
            <Footer/>
        </>
    );
}

export default Page;