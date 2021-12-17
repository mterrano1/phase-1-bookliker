document.addEventListener("DOMContentLoaded", function() {
    fetchBooks();
});


// fetch('http://localhost:3000/users')
// .then(res => res.json())
// .then(data => console.log(data[4]))

function fetchBooks(){
    fetch('http://localhost:3000/books')
    .then(res => res.json())
    .then(books => books.forEach(book => renderBookList(book)))
}

function renderBookList(book){
    const ul = document.querySelector('#list');
    const li = document.createElement('li');
    li.id = book.title;
    li.className = 'book-titles';
    ul.appendChild(li).innerText = book.title

    li.addEventListener('click', ()=>{
        showBookDetails(book);
    })
}

function clearPage(parent){
    while (parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

function showBookDetails(book){
    const showDiv = document.querySelector('#show-panel');
    clearPage(showDiv);
    const img = document.createElement('img');
    const h2 = document.createElement('h2');
    const h3 = document.createElement('h3');
    const h4 = document.createElement('h4');
    const p = document.createElement('p');
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    const btn = document.createElement('button');

    showDiv.appendChild(img);
    img.src = book.img_url;

    showDiv.appendChild(h2).innerText = book.title;
    showDiv.appendChild(h3).innerText = book.subtitle;
    showDiv.appendChild(h4).innerText = book.author;
    showDiv.appendChild(p).innerText = book.description;
    showDiv.appendChild(ul).className = 'ul-class';
    let userLikes = book.users;

    function addLikes(users){
        const getUl = document.querySelector('.ul-class');
        const li = document.createElement('li');
        getUl.appendChild(li).innerText = users.username
    };

    userLikes.forEach(user => addLikes(user));

    showDiv.appendChild(btn).innerText = 'Like';

    btn.addEventListener('click', ()=>{
        const getUl = document.querySelector('.ul-class');
        const li = document.createElement('li');
        getUl.appendChild(li).innerText = 'mike'
        console.log(book.users)

        // fetch(`http://localhost:3000/books/${book.id}`, {
        //     method: 'PATCH',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         Accept: 'application/json',
        //     }
        //     body: JSON.stringify({})
        // })
    })
}



