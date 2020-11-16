import React from 'react'
import Menu from '../../components/Menu'
import Rodape from '../../components/Rodape'
import Background from '../../assets/images/background.png'
import './index.css'
function Lpage(){
    return (
        <body>
            <header>
                <Menu />
            </header>
            <section>
                <div className="bk">
                    <img className='bkl' src={Background} alt="fundo"/>
                    <h1 className='txt'>ZENITSU</h1>
                </div>
            </section>
            <footer>
                <Rodape />
            </footer>
        </body>
    )
}
export default Lpage;