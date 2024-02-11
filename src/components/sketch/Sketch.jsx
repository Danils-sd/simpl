import "./Sketch.css";

function Sketch(){
    return(
        <div className="skatch-container">
            <div className="skatch-content">
                <h1 className="skatch-content--ab">Simple скетчбук</h1>
                <p className="skatch-content--disk">80 листов, твердая обложка, бумага  Fabriano 200 г/м2.Подойдет и для графики и для акварели. Для самых смелых творческих замыслов!</p>
                <button className="skatch-button">Купить</button>
            </div>
            <img className="skatch-img" src="./sketch.jpg"/>
        </div>
    );
}

export default Sketch;