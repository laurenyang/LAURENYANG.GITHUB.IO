function loadJSON(filePath) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', filePath, false);
    xhr.send();
  
    if (xhr.status === 200) {
      return JSON.parse(xhr.responseText);
    } else {
      console.error(`Error loading JSON file: ${xhr.status} ${xhr.statusText}`);
      return null;
    }
  }
  
  let bookReviews = loadJSON('data.json');
  console.log(bookReviews);
