//https://getbootstrap.com/docs/5.0/components/carousel/

console.log("Testing");

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Data is the parsed JSON object
    console.log(data);
    // You can access specific values in the JSON object
    console.log(data.key);
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch
    console.error('Error:', error);
  });



