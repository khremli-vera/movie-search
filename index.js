let url = "https://api.themoviedb.org/3/search/movie?api_key=b0cfd3f7d980e6bb6eb89b3f81cfa722&query=winter";

let cards = document.querySelectorAll('.movieCard')

async function getData(url) {
    let res = await fetch(url);
    let data = await res.json();

    showData(data)
}

function showData(data) {
    for (let i = 0; i < 3; i++) {
        console.log[i]
        cards[i].querySelector('img').src = 'https://image.tmdb.org/t/p/w1280' + data.results[i].poster_path
        console.log('https://image.tmdb.org/t/p/w1280' + data.results[i].poster_path)
        cards[i].querySelector('h2').textContent = data.results[i].title
        console.log(data.results[i].title)
    }
}

getData(url);

document.onkeydown = (e) => {
    if (e.keyCode === 13) {
        e.preventDefault();
        url = "https://api.themoviedb.org/3/search/movie?api_key=b0cfd3f7d980e6bb6eb89b3f81cfa722&query=" + document.querySelector('input').value
        console.log(url)
        getData(url)
        
    }
}

document.querySelector('span').addEventListener('click', function(){
    document.querySelector('input').value = ''
})
