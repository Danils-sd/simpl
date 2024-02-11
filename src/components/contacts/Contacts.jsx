import "./Contacts.css";

function Contacts(){
    return(
        <div className="contacts-container">
            <div className="contacts-logo-container">
                <span className="c-buttons-prod-sec1"></span>
                <label className="contacts-logo">simple</label>
                <span className="c-buttons-prod-sec2"></span>
                <span className="c-buttons-prod-sec3"></span>
            </div>
            <div className="contacts-cc-container">
                <img className="contacts-contact" src="./cc/Vector (1).svg"/>
                <img className="contacts-contact" src="./cc/Vector (2).svg"/>
                <img className="contacts-contact" src="./cc/Vector (3).svg"/>
                <img className="contacts-contact" src="./cc/Vector (4).svg"/>
            </div>
        </div>
    );
}

export default Contacts;