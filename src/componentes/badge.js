import React from 'react';
import confLogo from '../images/badge-header.svg';

class Badge extends React.Component{
    //todos los componentes requieren por lo menos un metodo que es obligatorio y ese es el render()
    render(){
        return <div>
            <div>
                <img src={confLogo} alt="logo de la conferencia"/>
            </div>

            <div>
                <img src="https://www.gravatar.com/avatar?d=identicon" alt="avatar"/>
                <h1>Anderson <br/> Lopez</h1>
            </div>

            <div>
                <p>Fronted Enginier</p>
                <p>@anderlop10</p>
            </div>

            <div>
                #platzi
            </div>
        </div>;
    }
}

export default Badge;