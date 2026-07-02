let moviesArr = JSON.parse(localStorage.getItem("movies")) || [];
let movieId = 1


// All Input Varibles -------------------------------------------------------------------------------------
const movieTitle = document.getElementById("movieTitle");
const movieGenre = document.getElementById("movieGenre");
const movieLanguage = document.getElementById("movieLanguage");
const movieReleaseYear = document.getElementById("movieReleaseYear");
const movieDuration = document.getElementById("movieaDuration");
const movieRating = document.getElementById("movieRating");


// All Button Varibles -------------------------------------------------------------------------------------
const addMovieBtn = document.getElementById("addMovieBtn");
const allMoviesBtn = document.getElementById("allMovies");
const newMoviesBtn = document.getElementById("newMovies");
const oldMoviesBtn = document.getElementById("oldMovies");
const comedyMovieBtn = document.getElementById("comedyMovie");
const horrorMoviesBtn = document.getElementById("horrorMovies");
const actionMoviesBtn = document.getElementById("actionMovies");
const topRatedMoviesBtn = document.getElementById("topRatedMovies");
const dashboardSortBtn = document.getElementById("sortBtnDashboard");

// All Dashboard Variables-----------------------------------------------------------------------------------
const totalMovies = document.getElementById("totalMovies");
const highestRating = document.getElementById("highestRating");
const lowestRating = document.getElementById("lowestRating");
const totalDuration = document.getElementById("totalDuration");


// All Ui Varibles ------------------------------------------------------------------------------------------
const movieCard = document.getElementById("movieCard");



// Add Movie Function----------------------------------------------------------------------------------------
addMovieBtn.onclick = function addMovie() {
    const movie = {
        id: movieId++,
        title: movieTitle.value.trim(),
        genre: movieGenre.value,
        language: movieLanguage.value,
        releaseYear: Number(movieReleaseYear.value),
        duration: Number(movieDuration.value),
        rating: Number(movieRating.value),
    }

    moviesArr.push(movie);
    // Save array in Local Storage
    localStorage.setItem("movies", JSON.stringify(moviesArr));

    console.log(moviesArr);
    displayUi();
}


// Display Ui Function---------------------------------------------------------------------------------------
function displayMovies(movie) {
    let div = document.createElement("div");
    div.innerHTML = `
    <div class = "movie-item">
    <p> Title : ${movie.title} </p>
    <p> Genre : ${movie.genre} </p>
    <p> Language : ${movie.language} </p>
    <p> Releases : ${movie.releaseYear} </p>
    <p> Duration : ${movie.duration} Minutes</p>
    <p> Rating : ${movie.rating}</p>
    </div>
    `
    movieCard.append(div)
}

function displayUi() {
    movieCard.innerHTML = "";
    moviesArr.forEach((movie) => {
        displayMovies(movie);
    })
    updateDashboard();
}


// SInitaly Display All Movies From Array--------------------------------------------------------------------
displayUi();


// Sort By All Movies----------------------------------------------------------------------------------------
allMoviesBtn.onclick = () => {
    displayUi();
    allMoviesBtn.style.backgroundColor = "#238636";
}


// Sort By Top Rated Movies----------------------------------------------------------------------------------
topRatedMoviesBtn.onclick = function () {
    const sortByTop = moviesArr.sort((a, b) => {
        return b.rating - a.rating
    })
    displayUi();
    topRatedMoviesBtn.style.backgroundColor = "#238636";
}


// Sort By Newest Movies-------------------------------------------------------------------------------------
newMoviesBtn.onclick = function newestSort() {
    const sortByTop = moviesArr.sort((a, b) => {
        return b.releaseYear - a.releaseYear
    })
    displayUi();
    newMoviesBtn.style.backgroundColor = "#238636";
    console.log("Btn color set to green")
}


// Sort By Oldest Movies-------------------------------------------------------------------------------------
oldMoviesBtn.onclick = function oldestSort() {
    const sortByTop = moviesArr.sort((a, b) => {
        return a.releaseYear - b.releaseYear

    })
    displayUi();
    oldMoviesBtn.style.backgroundColor = "#238636";
    console.log("Btn color set to green")
}


// Sort By Genre--------------------------------------------------------------------------------------------
function sortBygenre(genre) {
    movieCard.innerHTML = "";
    moviesArr.filter((movie) => {
        if (movie.genre == genre) {
            displayMovies(movie);
            return;
        }
    })

}

comedyMovieBtn.onclick = () => { sortBygenre("comedy"); }
horrorMoviesBtn.onclick = () => { sortBygenre("horror"); }
actionMoviesBtn.onclick = () => { sortBygenre("action"); }


// Dashboard Filter----------------------------------------------------------------------------------------
dashboardSortBtn.onclick = () => {
    let sortOpt = document.getElementById("sortMovie").value;
    if (sortOpt == "gATZ") {
        moviesArr.sort((a, b) => {
            return a.genre.localeCompare(b.genre)
        })
        displayUi();
    }
    if (sortOpt == "gZTA") {
        moviesArr.sort((a, b) => {
            return b.genre.localeCompare(a.genre)
        })
        displayUi();
    }
    if (sortOpt == "tATZ") {
        moviesArr.sort((a, b) => {
            return a.title.localeCompare(b.title)
        })
        displayUi();
    }
    if (sortOpt == "tZTA") {
        moviesArr.sort((a, b) => {
            return b.title.localeCompare(a.title)
        })
        displayUi();
    }
    if (sortOpt == "yOTN") {
        const sortByTop = moviesArr.sort((a, b) => {
            return a.releaseYear - b.releaseYear
        })
        displayUi();
    }
    if (sortOpt == "yNTO") {
        const sortByTop = moviesArr.sort((a, b) => {
            return b.releaseYear - a.releaseYear
        })
        displayUi();
    }
}


// Dashboard Function-----------------------------------------------------------------------------------
function totalMoviesOnDashboard() {
    const totalMov = moviesArr.length;
    totalMovies.textContent = `Total Movies : ${totalMov}`;
}

function totalDurationOnDashboard() {
    let totalMovieDuration = 0;
    moviesArr.forEach((movie) => {
        totalMovieDuration += movie.duration;
    });
    totalDuration.textContent = `Total Duration : ${totalMovieDuration / 60} Hrs`;
}

function highestRatingOnDashboard() {
    let highRating = moviesArr[0].rating;
    moviesArr.forEach((movie) => {
        if (highRating < movie.rating) {
            highRating = movie.rating;
        }
    })
    highestRating.textContent = `Highest Rating : ${highRating}`;
}

function lowestRatingOnDashboard() {
    let lowRating = moviesArr[0].rating;
    moviesArr.forEach((movie) => {
        if (lowRating > movie.rating) {
            lowRating = movie.rating;
        }
    })
    lowestRating.textContent = `Lowest Rating : ${lowRating}`;
}

function updateDashboard() {
    totalMoviesOnDashboard();
    totalDurationOnDashboard();
    highestRatingOnDashboard();
    lowestRatingOnDashboard();
}

function avgRating() {
    let sumOfAllRating = 0;
    moviesArr.forEach((movie) => {
        sumOfAllRating += Number(movie.rating);
    })

    let avg = sumOfAllRating / moviesArr.length;
    console.log("Avg RAting :", avg);
}

avgRating();


// Search Movie written by chatGpt for learning purpose-----------------------------------------------------------------------------------
const searchMovie = document.getElementById("searchMovie");

let searchTimer;

searchMovie.addEventListener("input", () => {

    clearTimeout(searchTimer);

    searchTimer = setTimeout(() => {

        searchMovies();

    }, 300);

});

function searchMovies() {

    const searchText = searchMovie.value.trim().toLowerCase();

    if (searchText === "") {

        displayUi();

        return;

    }

    movieCard.innerHTML = "";

    const searchedMovies = moviesArr.filter((movie) => {

        return movie.title.toLowerCase().includes(searchText);

    });

    if (searchedMovies.length > 0) {

        searchedMovies.forEach((movie) => {

            displayMovies(movie);

        });

    }
    else {

        movieCard.innerHTML = `
            <h2>No Movie Found</h2>
        `;

    }

}