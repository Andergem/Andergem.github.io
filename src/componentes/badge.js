import React from 'react';

import "./styles/Badge.css";
import confLogo from '../images/badge-header.svg';

class Badge extends React.Component{
    //todos los componentes requieren por lo menos un metodo que es obligatorio y ese es el render()
    render(){
        return <div className="Badge">
            <div className="Badge__header">
                <img src={confLogo} alt="logo de la conferencia"/>
            </div>

            <div className="Badge__section-name">
                <img className="Badge__avatar" src="https://www.gravatar.com/avatar?d=identicon" alt="avatar"/>
                <h1>Anderson <br/> Lopez</h1>
            </div>

            <div className="Badge__section-info">
                <h3>Fronted Engineer</h3>
                <div>@anderlop10</div>
            </div>

            <div className="Badge__footer">
                #platzi
            </div>
        </div>;
    }
}

export default Badge;