$(document).ready(start);


function start(){
  getQuotes();
  $('form').submit(submitClicked);
  $('#random').click(randomClicked);
}

function randomClicked(){
  $.ajax({
    url: '/random',
    method: 'GET'
  }).done((quote)=>{
    $('.card-columns').empty();
    appendQuotes(quote);
  }).fail((err)=>{

  });
}

function getQuotes(){
  $.ajax({
    url: '/quotes',
    method: 'GET'
  }).done((quotes)=>{
    quotes.forEach((quote)=>{
      appendQuotes(quote);
    });
  }).fail((err)=>{

  });
}

function appendQuotes(quote){
  let cardDiv = $('.card-columns');

  let card = $('<div class="card p-4"></div>');
  let img = $(`<img class="card-img-top" src="${quote.imgUrl}" alt="${quote.author}">`);

  let blockquote = $('<blockquote class="blockquote mb-0 card-body"></blockquote>');

  let tempQuote = $(`<p>${quote.text}</p>`);

  let footer = $('<footer class="blockquote-footer"></footer>');
  let authorName = $(`<small class="text-muted"><cite title="Author">${quote.author}</cite></small>`);

  cardDiv.append(card.append([img,blockquote.append([tempQuote, footer.append(authorName)])]));
}


function submitClicked(e){
  e.preventDefault();
  let quoteObj = {
      newQuote: $('#quoteAdd').val(),
      newAuthor: $('#authorAdd').val(),
      newImage: $('#image').val()
     };

  $.ajax({
    url: '/quotes',
    method: 'POST',
    data : quoteObj
  }).done((quotes)=>{

    $('.card-columns').empty();
    quotes.forEach((quote)=>{
      appendQuotes(quote);
    });

    }).fail(()=>{
    console.log('its a sad sad day');
  });

}
