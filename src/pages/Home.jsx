import LeadText from "../components/leadText/LeadText";
import Button from "../components/button/Button";

function Home(){
    return (
        <main className='box center'>
            <LeadText/>
            <Button kind='primary' text='Logowanie' cb={() => {}}/>
        </main>
    )
}

export default Home;