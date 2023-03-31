const APIURL = 'http://localhost:3000/films';
const IMGPATH = "./images/";
const main = document.getElementById("main");
const form = document.getElementById("form");
const searchForm = document.getElementById("searchForm");

let ticketsAvailable;
// Get the data for the movie being displayed
function getData() {
  const movieId = document.getElementById('buy-ticket-main').getAttribute('data-id');
  fetch(`${APIURL}/${movieId}`)
    .then(response => response.json())
    .then(data => {
      ticketsAvailable = data.capacity - data.tickets_sold;
      const ticketsAvailableElement = document.querySelector('#main p:last-child');
      ticketsAvailableElement.textContent = `Available Tickets: ${ticketsAvailable}`;
    })
    .catch(error => console.error(error));
}


    // Handle ticket purchase button click
    const buyTicketButton = document.getElementById('buy-ticket-main');
buyTicketButton.addEventListener('click', () => {
      if (ticketsAvailable <= 0) {
        alert('Sorry, this showing is sold out!');
      } else {
        alert('ticket bought!');
        // Decrement tickets sold and update server
        data.tickets_sold++;
        fetch(`http://localhost:3000/films/${data.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(updatedData => {
           // Update available tickets and UI
           ticketsAvailable--;

          // Calculate available tickets and update UI
          const ticketsAvailableElement = document.querySelector('#main p:last-child');
           ticketsAvailableElement.textContent = `Available Tickets: ${ticketsAvailable}`;
buyTicketButton.disabled = true;
        });
      }
    });


// Get movies based on search term
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const searchTerm = document.getElementById("search").value;
  fetch(`${APIURL}?q=${searchTerm}`)
    .then((response) => response.json())
    .then((data) => {
      const movies = data.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      displayMovies(movies);
    })
    .catch((error) => console.error(error));
});


// Display movies in the main section
function displayMovies(movies) {
  main.innerHTML = "";
  const moviesList = document.createElement("ul");
  movies.forEach((movie) => {
    const li = document.createElement("li");
    li.textContent = movie.title;
    li.dataset.id = movie.id;
    const buyTicketButton = document.createElement('button');
    buyTicketButton.textContent = 'Buy Ticket';
    buyTicketButton.setAttribute('data-id', movie.id);
    buyTicketButton.setAttribute('data-tickets-sold', movie.tickets_sold);
    li.appendChild(buyTicketButton);
    moviesList.appendChild(li);
  });
  main.appendChild(moviesList);
  getData();
}


