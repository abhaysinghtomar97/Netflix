const carousel = document.querySelector(".carousel");
const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");

let scrollAmount = 0;
const scrollStep = 180; // image width + gap

rightBtn.addEventListener("click", () => {
  carousel.scrollBy({ left: scrollStep, behavior: "smooth" });
});

leftBtn.addEventListener("click", () => {
  carousel.scrollBy({ left: -scrollStep, behavior: "smooth" });
});

//database
const API_KEY = '21f2df3a';
const searchInput = document.getElementById('searchInput');
const movieGrid = document.getElementById('movieGrid');

searchInput.addEventListener('input', () => {
  const query = searchInput.value.trim();
  if (query.length > 2) {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`)
      .then(res => res.json())
      .then(data => {
        if (data.Response === "True") {
          displayMovies(data.Search);
        } else {
          movieGrid.innerHTML = "<p>No results found.</p>";
        }
      });
  } else {
    movieGrid.innerHTML = "";
  }
});

function displayMovies(movies) {
  movieGrid.innerHTML = movies.map(movie => `
    <div class="movie-card">
      <img src="${movie.Poster !== "N/A" ? movie.Poster : 'assets/images/fallback.jpg'}" alt="${movie.Title}" />
      <h3>${movie.Title}</h3>
      <p>${movie.Year}</p>
    </div>
  `).join('');
}

