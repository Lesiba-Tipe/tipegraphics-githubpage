console.log("Testing");
path = 'http://localhost:3000/data'
//path = './shared/data.json'     //Development path
fetch(path)
  .then(response => response.json())
  .then(data => {
    link = 'https://drive.google.com/uc?id=';

    let quotes = data.quotes  //list of quotes

    const quote_img = document.getElementById('quote_img');
    const quote_txt = document.getElementById('quote_txt');

    quote_txt.textContent = quotes[0].quote
      
  })
  .catch(error => {
    //alert('Make sure local server is running...\n'+ error)
    console.error('Error:', error);
  });