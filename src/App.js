import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';

const customer = {
  'name' : '양성빈',
  'birthday' : '960522',
  'gender' : '남성',
  'job' : '대학생'
}

class App extends Component {
  render() {
    return (
      <Customer
        name={customer.name}
        birthday={customer.birthday}
        gender={customer.gender}
        job={customer.job}
      />
    );
  }
}

export default App;
