import "./Asort.css";
import AsortCard from "./asortCard/AsortCard";

function Asort(){
    return(
        <div className="asort-container">
            <AsortCard img={"./asort/asort1.jpg"} name={"Упаковка"} tir={50} disc={"Сделано из крафт-бумаги или плотного картона. Упаковки имеют различные формы и расцветки, изготовим форму под заказ."}/>
            <AsortCard img={"./asort/asort2.jpg"} name={"Пакеты"} tir={200} disc={"С прямоугольным дном. От 10 см до 60 см по высоте. Материалы: картон, крафт бумага. Различные расцветки и дизайн."}/>
            <AsortCard img={"./asort/asort3.jpg"} name={"Кейсы"} tir={30} disc={"Подойдет для документов и других бумаг. Различные расцветки, размеры и плотность. Материал: прессованная бумага."}/>
            <AsortCard img={"./asort/asort4.jpg"} name={"Другие изделия"} tir={100} disc={"Нестандартные упаковки, кейсы и другие изделия различных размеров и конфигураций. Изготовим в кратчайшие сроки."}/>
        </div>
    );
}

export default Asort;