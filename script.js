
function loadJSON(filePath) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', filePath, false);
    xhr.send();
  
    if (xhr.status === 200) {
      let bookReviews = JSON.parse(xhr.responseText) //loadJSON(filePath);
      return bookReviews;
    } else {
      console.error(`Error loading JSON file: ${xhr.status} ${xhr.statusText}`);
      return null;
    }
  }

//TODO: change data to data


var data = loadJSON('data.json');
console.log(data);
// var bookData = [
//   {
//       "book_name": "Upgrade",
//       "author": "Blake Crouch",
//       "categories": [
//           "Sci-Fi",
//           "Fiction"
//       ],
//       "date_read": "2022-11-06T00:00:00.000Z",
//       "date_read_str": "11/6/22",
//       "rating": "4",
//       "rating_text": "☆☆☆☆",
//       "book_image": "images/upgrade.jpg",
//       "preview": "Here’s a hot take: reading > TV. *Upgrade* reminded me how addicting good sci-fi could be."
//   },
//   {
//       "book_name": "Numbers Don't Lie",
//       "author": "Vaclav Smil",
//       "categories": [
//         "Science",
//         "Non-fiction"
//       ],
//       "date_read_str": "8/25/22",
//       "date_read": "2022-08-25T00:00:00.000Z",
//       "rating": "3",
//       "rating_text": "☆☆☆",
//       "book_image": "images/numbersdontlie.jpg",
//       "preview": "Numbers Don’t Lie reads like a fizzy soda on a hot summer day - it’s light, bubbly, refreshing, and…"
//   }
// ]

function generatePreviewCards(bookData) {
//function generatePreviewCards() {
  var allCards;
  for (let i = 0; i < Object.keys(bookData).length; i++) {
    let book = bookData[i];
    let cardHTML = generatePreviewCard(book);
    allCards = allCards + cardHTML;
  }
  allCards = allCards.replace("undefined", "");
  return allCards;
}

// book is single book data  
function generatePreviewCard(book) {
  let cardHTML = '<div class="window">' +
  '     <div class="title-bar">' +
  '       <div class="title-bar-text">'+book.book_name.substring(0, 45)+'</div>' +
  '     </div>' +
  '     <div class="window-body">' +
  '         <div style="display: flex; justify-content: center;">' +
  '             <img style="width:100px; " src=' + book.book_image + ' alt="numbersdontlie cover">' +
  '         </div>' +
  '         <fieldset>' +
  '             <legend>Preview</legend>' +
  '             <p>'+book.preview+'</p>' +
  '         </fieldset>' +
  '     </div>' +
  '     <div class="window-body" style=" display: flex; justify-content: space-between; "> ' +
  '         <div style="line-height: 0;">' +
  '             <p> Rating: '+book.rating_text+'</p>' +
  '         </div>' +
  '         <div align="right">' +
  '             <a href="reviews/'+book.id+'.html"> <button>Read more</button> </a>' +
  '         </div>' +
  '     </div>' +
  '     <div class="status-bar">' +
  '       <p class="status-bar-field">'+book.categories[0]+'</p>' +
  '       <p class="status-bar-field">'+book.author+'</p>' +
  '       <p class="status-bar-field">Read '+book.date_read_str+'</p>' +
  '     </div>' +
  ' </div>'
  return cardHTML;
}
