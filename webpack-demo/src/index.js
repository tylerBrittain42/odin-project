import _ from 'lodash';
import myName from './myName.js';


function component() {
    const element = document.createElement('div');
  
  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack', '. ', myName('Chuck')], ' ');
  
    return element;
  }
  
  document.body.appendChild(component());


  
