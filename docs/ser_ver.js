console.log("Ser_ver");
//path = 'http://localhost:3000/quotes'
path = './data/database.json'     //Development path
fetch(path)
  .then(response => response.json())
  .then(data => {
    
    const quotes = data.quotes //list of quotes //Development
    //const quotes = data  //list of quotes //Local
    //console.log("Test: ",quotes)
    //console.log("\nQuote: ",quotes[0].quote)

    var quote_img = document.getElementById('quote_img');
    var quote_txt = document.getElementById('quote_text');


    
    //Delay
    var midnight = "13:01:00";
    //var midnight = "0:00:00";
    var now = null;

    var index = 0
    var quote = quotes[index]

    setInterval(function () {
      now = moment().format("H:mm:ss");
      
      //console.log('Objects:',quote)

      if(index === 0){  //Default
        quote_txt.innerHTML = '"' + quote.quote + '"<span style="color:#50FA7B; font-style: italic"> ~' +quote.author+'</span>'
        quote_img.setAttribute('src', quote.image);
      }

      if(now === midnight) {
        
        if(index < quotes.length){
          index++       
          //var index = Math.floor(Math.random() * quotes.length)         
          quote_txt.innerHTML = '"' + quote.quote + '"<span style="color:#50FA7B; font-style: italic"> ~'+quote.author+'</span>'

          quote_img.setAttribute('src', quote.image);

        }else{
          index = 0;
          console.log('Index: ',index)
          index++
        }
      }
    }, 1000)
      
  })
  .catch(error => {
    //alert('Make sure local server is running...\n'+ error)
    console.error('Error:', error);
  });