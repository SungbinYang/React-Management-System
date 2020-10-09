import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';

const customers = [
  {
  'id' : '1',
  'image' : 'https://placeimg.com/64/64/1',
  'name' : '양성빈',
  'birthday' : '960522',
  'gender' : '남성',
  'job' : '대학생'
},
{
  'id' : '2',
  'image' : 'https://placeimg.com/64/64/2',
  'name' : '홍길동',
  'birthday' : '910306',
  'gender' : '남성',
  'job' : '웹 퍼블리셔'
},
{
  'id' : '3',
  'image' : 'https://placeimg.com/64/64/3',
  'name' : '이순신',
  'birthday' : '9601212',
  'gender' : '남성',
  'job' : '백엔드'
}
]

class App extends Component {
  render() {
    return (
      <div>
       {
         customers.map(c => {
           return (
           <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
           />);
         })
       }
      </div>
    );
  }
}

export default App;
