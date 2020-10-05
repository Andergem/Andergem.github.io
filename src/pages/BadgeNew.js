import React from 'react';
import Navbar from '../componentes/Navbar';
import header from '../images/badge-header.svg';
import Badge from '../componentes/Badge';
import BadgeForm from '../componentes/BadgeForm';
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
                        <div className="col-6">
                            <Badge 
                                firstName="Anderson"
                                lastName="Lopez"
                                twitter="Anderson"
                                jobTitle="Ingeniero Informatico"
                                avatarUrl="https://www.gravatar.com/avatar?d=identicon"
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm />
                        </div>
                    </div>  
                </div>
            </div>
        )
    }
}

export default BadgeNew;