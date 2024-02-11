import "./Guaid.css";

function Guaid(){
    return(
        <div className="guaid-container">
            <div className="guaid-top-content">
                <div className="guaid-res">
                    <img className="guaid-res-img" src="./elements/im1.png"/>
                    <span className="guaid-res-disc"><span className="guaid-res-disc-top">V.1</span><br/>Результат вашего обучения</span>
                </div>
                <div className="guaid-res">
                    <img className="guaid-res-img" src="./elements/im2.png"/>
                    <span className="guaid-res-disc"><span className="guaid-res-disc-top">V.2</span><br/>Результат вашего обучения</span>
                </div>
                <div className="guaid-res">
                    <img className="guaid-res-img" src="./elements/im3.png"/>
                    <span className="guaid-res-disc"><span className="guaid-res-disc-top">V.3</span><br/>Результат вашего обучения</span>
                </div>
            </div>
            <div className="guaid-bottom-content">
                <img className="guaid-main-img" src="/elements/im4.png"/>
                <p className="guaid-bottom-disc">
                    <h1 className="guaid-bottom-disc-ab">Максимальная белизна</h1><br/>
                    Для повышения белизны, гладкости и мягкости в состав бумажной массы вводят белые минеральные вещества: мел, тальк, каолин и др. Эта операция называется наполнением.<br/>
Отлив бумажного листа осуществляют на бумагоделательной машине, важнейшей частью которой является непрерывно движущаяся (как транспортер) металлическая или капроновая сетка.
                </p>
            </div>
        </div>
    );
}

export default Guaid;