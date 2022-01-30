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
                <div className="container">
                    <div className="right-description">
                        <p class="section-name">SPONSORS</p>
                        <h1>Our Sponsors</h1>
                        <p>We are proud to be backed by many companies. Our sponsors are a part of us and help us grow and achieve goals not possible otherwise.</p>
                    </div>
                    <div className="sponsor-list">
                        <div className="sponsor-item" onClick={() => window.open('https://shop.adata.com', "_blank")}>
                            <Adata className="sponsor-filter" />
                        </div>
                        <div className="sponsor-item" onClick={() => window.open('https://www.antec.com/', "_blank")}>
                            <Antec className="sponsor-filter" />
                        </div>
                        <div className="sponsor-item" onClick={() => window.open('https://www.amazon.com/stores/page/69C78C77-A2F8-43A6-896D-110418DF6D12', "_blank")}>
                            <Arctic className="sponsor-filter" />
                        </div>
                        <div className="sponsor-item" onClick={() => window.open('https://www.bitfenix.com/', "_blank")}>
                            <Bitfenix className="sponsor-filter" />
                        </div>
                        <div className="sponsor-item" onClick={() => window.open('https://darkflash.com/', "_blank")}>
                            <Darkflash className="sponsor-filter" />
                        </div>
                        <div className="sponsor-item" onClick={() => window.open('https://shop.xpg.com/', "_blank")}>
                            <Xpg className="sponsor-filter" />
                        </div>
                        <div className="sponsor-item" onClick={() => window.open('https://www.teamgroupinc.com/en/', "_blank")}>
                            <Tforce className="sponsor-filter" />
                        </div>
                        <div className="sponsor-item" onClick={() => window.open('http://www.v-color.net/', "_blank")}>
                            <Vcolor className="sponsor-filter" />
                        </div>
                        <div className="sponsor-item" onClick={() => window.open('https://www.silicon-power.com/web/gb/', "_blank")}>
                            <Sp className="sponsor-filter" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sponsors;