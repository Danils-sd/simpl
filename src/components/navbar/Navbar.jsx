import"./Navbar.css";

function Navbar(){
    return(
        <div className="nav-container">
            <span className="av-buttons-prod-sec1"></span>
            <label className="nav-logo">simple</label>
            <span className="av-buttons-prod-sec2"></span>
            <span className="av-buttons-prod-sec3"></span>
            
            <div className="nav-buttons-container">
                <div className="nav-buttons-block">
                    <span className="nav-buttons">Продукция</span>
                    <span className="nav-buttons">Материалы</span>
                    <span className="nav-buttons nav-about">О нас</span>
                    <span className="nav-buttons">Контакты</span>
                </div>
                <span className="nav-buttons-search"><img src="./elements/search.svg"/></span>
                <span className="nav-buttons-exit"><img className="nav-exit" src="./elements/exit.png"/></span>
            </div>
        </div>
    );
}

export default Navbar;