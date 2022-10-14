import  dataIcn from "../../images/ikonka_wprowadzanie_danych-cropped.svg";
import  reportIcn from "../../images/ikonka_raporty-cropped.svg";
import  templateIcn from "../../images/ikonka_pobierz_szablon_pliku_cropped.svg"
import  instructionIcn from "../../images/ikonka_pobierz_instrukcje_cropped.svg"
import  loginIcn from "../../images/ikonka_instr_logowania.svg"
import  formIcn from "../../images/ikonka_formularz.svg"

import "./Infographics.scss"


function Infographics() {
    return (
        <section className='info'>
            <div className='info__instructions'>
                <a href="#elo" className='info__instruction'>
                    <img className='info__icon' src={templateIcn} alt="icon"/>
                    <p className='info__text'>pobierz szablon pliku</p>
                </a>

                <a href="#elo" className='info__instruction'>
                    <img className='info__icon' src={instructionIcn} alt="icon"/>
                    <p className='info__text'>pobierz instrukcję</p>
                </a>

                <a href="#elo" className='info__instruction'>
                    <img className='info__icon' src={loginIcn} alt="icon"/>
                    <p className='info__text'>instrukcja logowania</p>
                </a>

                <a href="#elo" className='info__instruction'>
                    <img className='info__icon' src={formIcn} alt="icon"/>
                    <p className='info__text'>zgłoś błędy</p>
                </a>
            </div>

            <h2 className="info__hdl info__hdl--space">Najczęściej zadawane pytania</h2>

            <div className="info__functions">
                <div className="info__function">
                    <img className='info__icon info__icon--functions' src={dataIcn} alt=""/>
                    <h3 className="info__hdl info__hdl--sub">Wprowadzanie danych</h3>
                    <p className="info__text info__text--bigger">Tutaj wprowadzisz i zatwierdzisz dane płacowo-kadrowe dotyczące pracowników zatrudnionych w Twoim
                        podmiocie</p>
                </div>

                <div className="info__function">
                    <img className='info__icon info__icon--functions' src={reportIcn} alt=""/>
                    <h3 className="info__hdl info__hdl--sub">Raporty</h3>
                    <p className="info__text info__text--bigger">Tutaj wygenerujesz w formie tabel i wykresów według wybranych przez siebie kryteriów</p>
                </div>
            </div>

            <h2 className="info__hdl--primary">Korzyści z użytkowania aplikacji</h2>

            <div className="info__steps">
                <div className="info__step">
                    <i className="info__badge">1</i>
                    <p className="info__text info__text--bigger">Automatyzacja procesu przekazywania danych finansowo-kadrowych - wprowadzenie danych przez import
                        udostępnionego szablonu plików</p>
                </div>

                <div className="info__step">
                    <i className="info__badge">2</i>
                    <p className="info__text info__text--bigger">Monitorowanie dynamiki zmian kosztów osobowych pracowników w podziale na kategorię personelu i
                        formę zatrudnienia</p>
                </div>

                <div className="info__step">
                    <i className="info__badge">3</i>
                    <p className="info__text info__text--bigger">Reprezentatywna próba danych pozwoli na rzetelne oszacowanie taryf</p>
                </div>

                <div className="info__step">
                    <i className="info__badge">4</i>
                    <p className="info__text info__text--bigger">Prezentacja wyników w postaci zbiorczych raportów i analiz przekrojowych</p>
                </div>
            </div>
        </section>
    )
}

export default Infographics;