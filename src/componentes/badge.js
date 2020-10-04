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
                <img className="Badge__avatar" src={ this.props.avatarUrl} alt="avatar"/>
                <h1>
                    { this.props.firstName } <br/>{ this.props.lastName }
                </h1>
            </div>

            <div className="Badge__section-info">
                <h3>{ this.props.jobTittle}</h3>
                <div>@{ this.props.twitter}</div>
            </div>

            <div className="Badge__footer">
                #platzi
            </div>
        </div>;
    }
}

export default Badge;