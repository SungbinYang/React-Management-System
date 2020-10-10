const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers', (req, res) => {
    res.send([
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
      ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));