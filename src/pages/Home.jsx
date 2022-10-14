import LeadText from "../components/leadText/LeadText";
import Button from "../components/button/Button";
import Infographics from "../components/infographics/Infographics";

function Home(){
    return (
        <main className='box center'>
            <LeadText/>
            <Button kind='primary' text='Logowanie' cb={() => {}}/>
            <Infographics/>
        </main>
    )
}

export default Home;