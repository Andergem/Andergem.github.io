//const element = document.createElement('h1');
//element.innerText = 'hello, platzi bayes';
//const container = document.getElementById('app');
//container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './global.css';
import Badge from './componentes/badge';

 

const container = document.getElementById('app');
//const element = <h1>Hello, Platzi Badges!</h1>;

//ReactDOM.render(__qué__, __donde__); qué: que vas a poner; donde: en que lugar
ReactDOM.render(
    <Badge 
        firstName="Anderson"
        lastName="Lopez" 
        jobTittle="Ingenier Informatic"
        twitter="Anderson"
        avatarUrl="https://www.gravatar.com/avatar?d=identicon"
    />, 
    container);//recordemos que al reactdom siempre hay que darle un elemento por eso al Badge lo colocamos asi < />
