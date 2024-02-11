import "./Label.css";

function Label(){
    return(
        <div className="label-container">
            <div className="label-content">
                <h1 className="label-ab">Простые вещи. Из бумаги</h1>
                <p className="label-disc">Бума́га (предположительно от итал. bombagia, первоисточником же считается иранский) — волокнистый материал с минеральными добавками. </p>
                <button className="label-button">Каталог</button>
            </div>
            <img  className="label-img" src="./elements/botal.png"/>
        </div>
    );
}
export default Label;