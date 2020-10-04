import React from 'react';
import Navbar from '../componentes/Navbar';
import header from '../images/badge-header.svg';
import Badge from '../componentes/Badge';
import './styles/BadgeNew.css';

class BadgeNew extends React.Component{
    render(){
        return (
            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="logo"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge 
                                firstName="Anderson"
                                lastName="Lopez"
                                twitter="Anderson"
                                jobTitle="Ingeniero Informatico"
                                avatarUrl="https://www.gravatar.com/avatar?d=identicon"
                            />
                        </div>
                    </div>  
                </div>
            </div>
        )
    }
}

export default BadgeNew;