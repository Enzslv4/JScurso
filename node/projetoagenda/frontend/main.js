import 'core-js/stable';
import 'regenerator-runtime/runtime';

import Login from './modules/Login';
const login = new Login('.form-login')
const registration = new Login('.form-registration')
login.init()
registration.init()
// import './assets/css/style.css';