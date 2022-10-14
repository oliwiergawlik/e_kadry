import {Link} from "react-router-dom";

function NotFound() {
    return (
        <>
            <h1>Nie znaleziono strony</h1>
            <Link to="/">Powrót na stronę główną</Link>
        </>
    );
}

export default NotFound;
