const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

const port = process.env.PORT || 4000;


let quotes = [{
                imgUrl: 'https://s24474.pcdn.co/wp-content/uploads/2018/03/web1_030215-ap-drseuss-3-img201832171934785.jpg',
                text: 'Don\'t cry because it\'s over, smile because it happened.',
                auhtor: 'Dr. Seuss'

              },{
                imgUrl: 'https://www.irishcentral.com/uploads/article/121667/cropped_Oscar_Wilde.jpg?t=1506163828',
                text: 'Be yourself; everyone else is already taken.',
                auhtor: 'Oscar Wilde'

              },{
                imgUrl: 'https://www.biography.com/.image/t_share/MTE5NDg0MDU0OTU2OTAxOTAz/albert-einstein-9285408-1-402.jpg',
                text: 'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.',
                auhtor: 'Albert Einstein'

              },{
                imgUrl: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/mae-west-quim-abella.jpg',
                text: 'You only live once, but if you do it right, once is enough.',
                auhtor: 'Mae West'
              }];

app.use(express.static('server/public'));

app.get('/quotes', (req, res)=>{
  res.send(quotes);
});


app.post('/quotes', (req,res)=>{
  quotes.push({imgUrl: req.body.newImage, text: req.body.newQuote, author: req.body.newAuthor});
  res.send(quotes);
});


app.get('/random', (req,res)=>{

  let random = Math.floor(Math.random() * (quotes.length));
  res.send(quotes[random]);
});


app.listen(port, function() {
    console.log('app listening on port: ', port);
});
