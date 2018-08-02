import _ from 'lodash';
import './style.css';
import Logo from './logo.png';
import Data from './data/data.xml';

function component() {
  var element = document.createElement('div');

  // ----Lodash, currently included via a script, is required for this line to work
  // lodash,now imported by script
  element.innerHTML = _.join(['你好', 'webpack'], ' ');
  element.classList.add('hello');

  // Add the image to our existing div.
  var myLogo = new Image();
  myLogo.src = Logo;

  element.appendChild(myLogo);

  // the Data variable you import it to will contain parsed JSON for easy consumption
  console.log(Data);

  return element;
}

document.body.appendChild(component());
