export default {
    formatTitle,
    isMovieTitleExist,
    findMovieById
}

function formatTitle(title){
    let regFilter=/[^a-z 0-9 :'-]/g
    let regFirstLetter=/\b[a-z]/g;

    return title.toLowerCase()
            .replace(regFilter, "")
            .replace(regFirstLetter, (letter)=>(letter.toUpperCase()))
            .trim();
}

function isMovieTitleExist(movies, title){
    return movies.some((movie)=>(movie.title === title));
}

function findMovieById(movies, id){
    return movies.find((movie)=>(movie.id === id));
}