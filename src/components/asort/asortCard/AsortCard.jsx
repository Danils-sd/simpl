import "./AsortCard.css";

function AsortCard({img, name, tir, disc}){
    return(
        <div className="asort-card--container">
            <img className="asort-card--img" src={img}/>
            <h3 className="asort-card--name">{name}</h3>
            <h6 className="asort-card--tir">Тираж: от {tir} штук</h6>
            <p className="asort-card--disc">{disc}</p>
            <buttom className="asort-card--button">Подробнее <img className="asort-card--button-img" src="./asort/arrow-asort.svg"/></buttom>
        </div>
    );
}

export default AsortCard;