// Fetching data from the API
fetch('https://data.gov.bh/api/explore/v2.1/catalog/datasets/01-statistics-of-students-nationalities_updated/records?where=colleges%20like%20%22IT%22%20AND%20the_programs%20like%20%22bachelor%22&limit=100')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parse the JSON response
  })
  .then(data => {
    console.log(data); // Log the data to the console
    // Further processing of data can be done here
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });           
