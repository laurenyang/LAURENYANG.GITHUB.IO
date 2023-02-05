function loadJSON(filePath) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', filePath, false);
    xhr.send();
  
    if (xhr.status === 200) {
      let bookReviews = JSON.parse(xhr.responseText) //loadJSON(filePath);
      console.log(bookReviews);
      return bookReviews;
    } else {
      console.error(`Error loading JSON file: ${xhr.status} ${xhr.statusText}`);
      return null;
    }
  }
  
  

  function generatePreviewCard(bookData) {
    //let bookCoverImage = bookData.coverImage;
    let bookAuthor = bookData.author;
    let bookName = bookData.book_name;
    let bookCategories = bookData.categories;
    let bookRating = bookData.rating;
    let bookRatingText = bookData.rating_text;
    let dateRead = bookData.date_read;
  
    let cardHTML = '<div class="preview-card">' +
      //'<img src="' + bookCoverImage + '" class="book-cover-image">' +
      '<div class="book-details">' +
      '<p class="book-author">Author: ' + bookAuthor + '</p>' +
      '<p class="book-subject">Subject: ' + bookSubject + '</p>' +
      '<p class="book-rating">Rating: ' + bookRating + ' stars</p>' +
      '<p class="date-read">Date Read: ' + dateRead + '</p>' +
      '</div>' +
      '<button class="read-more-button">Read More</button>' +
      '</div>';
  
    return cardHTML;
  }
  