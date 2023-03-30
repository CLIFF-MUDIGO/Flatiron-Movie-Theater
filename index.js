const APIURL = 'http://localhost:3000/films';
const IMGPATH = "./images/";
const main = document.getElementById("main");
const form = document.getElementById("form");
const searchForm = document.getElementById("searchForm");
const searchInput = searchForm.getElementsByTagName("input")[0]
const searchButton = searchForm.getElementsByTagName("button")[0]

//buying ticket button
const buyTicketButton = document.getElementById('buy-ticket');

buyTicketButton.addEventListener('click', () => {
  // Handle the button click event here
});


// Get movie data from API and display them
function getMovies(url) {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      showMovies(data);
    })
    .catch(error => console.error(error));
}

// Display movies on the page
function showMovies(movies) {
  main.innerHTML = "";

  movies.forEach(movie => {
    const { poster, title, vote_average, overview } = movie;

    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");

    movieEl.innerHTML = `
      <img src="${IMGPATH + poster}" alt="${title}"/>
      <div class="movie-info">
        <h3>${title}</h3>
        <span class="${getClassByRate(vote_average)}">${vote_average}</span>
      </div> 
      <div class="overview">
        <h2>Overview:</h2>
        ${overview}
      </div>
    `;

    main.appendChild(movieEl);
  });
}

// Get class for vote average


// Get movies from API when the page loads
getMovies(APIURL);

// Get movies based on search term
form.addEventListener("submit", e => {
  e.preventDefault();

  const searchTerm = search.value.trim();

  if (searchTerm) {
    getMovies(`${APIURL}?title_like=${searchTerm}`);
    search.value = "";
  }
});

