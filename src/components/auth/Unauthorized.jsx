import {useNavigate} from "react-router-dom";

function Unauthorized(){
    const navigate = useNavigate();

    const goBack = () => navigate(-1)

    return (
        <section>
            <h1>Unauthorized</h1>
            <br/>
            <p>Nie masz uprawnień do zobaczenia tej strony</p>
            <div className="flexGrow">
                <button onClick={goBack}>Wstecz</button>
            </div>
        </section>
    )
}

export default Unauthorized;