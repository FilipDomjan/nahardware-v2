import { React } from 'react';
import './Sponsors.css';
import { ReactComponent as Adata } from '../img/adata.svg';
import { ReactComponent as Antec } from '../img/antec.svg';
import { ReactComponent as Arctic } from '../img/arctic.svg';
import { ReactComponent as Bitfenix } from '../img/bitfenix.svg';
import { ReactComponent as Darkflash } from '../img/darkflash.svg';
import { ReactComponent as Sp } from '../img/sp.svg';
import { ReactComponent as Tforce } from '../img/t-force.svg';
import { ReactComponent as Vcolor } from '../img/v-color.svg';
import { ReactComponent as Xpg } from '../img/xpg.svg';
import triangle from '../img/triangle.png';


function Sponsors(){

    return(
        <>
            <div className="sponsors">
                <img src={triangle} />
                <div className="container">
                    <h1>OUR SPONSORS</h1>
                    <p>We are proud to be backed by many companies. Our sponsors are a part of us and help us grow and achieve goals not possible otherwise.</p>
                    <div className="sponsor-list">
                        <div className="sponsor-item" onClick={() => window.open('https://shop.adata.com', "_blank")}>
                            <Adata width="180px" height="180px" className="sponsor-filter" />
                        </div>
                        <div className="sponsor-item" onClick={() => window.open('https://www.antec.com/', "_blank")}>
                            <Antec width="180px" height="180px" className="sponsor-filter" />
                        </div>
                        <div className="sponsor-item" onClick={() => window.open('https://www.amazon.com/stores/page/69C78C77-A2F8-43A6-896D-110418DF6D12', "_blank")}>
                            <Arctic width="180px" height="180px" className="sponsor-filter-arctic" />
                        </div>
                        <div className="sponsor-item" onClick={() => window.open('https://www.bitfenix.com/', "_blank")}>
                            <Bitfenix width="180px" height="180px" className="sponsor-filter" />
                        </div>
                        <div className="sponsor-item" onClick={() => window.open('https://darkflash.com/', "_blank")}>
                            <Darkflash width="180px" height="180px" className="sponsor-filter" />
                        </div>
                        <div className="sponsor-item" onClick={() => window.open('https://shop.xpg.com/', "_blank")}>
                            <Xpg width="180px" height="180px" className="sponsor-filter" />
                        </div>
                        <div className="sponsor-item" onClick={() => window.open('https://www.teamgroupinc.com/en/', "_blank")}>
                            <Tforce width="180px" height="180px" className="sponsor-filter" />
                        </div>
                        <div className="sponsor-item" onClick={() => window.open('http://www.v-color.net/', "_blank")}>
                            <Vcolor width="180px" height="180px" className="sponsor-filter" />
                        </div>
                        <div className="sponsor-item" onClick={() => window.open('https://www.silicon-power.com/web/gb/', "_blank")}>
                            <Sp width="180px" height="180px" className="sponsor-filter" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sponsors;