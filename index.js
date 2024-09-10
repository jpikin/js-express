const express = require('express');
const fs = require('fs');

const app = express();

app.get('/', function(req, res) {
    console.log(req.path)
    res.send(`<h1>Главная страница
        Счетчик посещений страницы: ${getCount(req.path)}</h1>`)
});
app.get('/about', function(req, res) {
    res.send('ZAGLUSHKA_about')
   });

app.listen(5556);

const getCount = function(req){
    const data = JSON.parse(fs.readFileSync('./counter.json', 'utf8'));
    console.log(data);
}
const addCount = function(data){
    ++data;

}