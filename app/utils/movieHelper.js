import validator from "@utils/validator";

export default {
    isMovieTitleExist,
    validateMovieForm,
    formatText,
    formatTitle,
    findMovieById
}

function isMovieTitleExist(movies, title) {
    return movies.some((movie) => (movie.title === title));
}

function findMovieById(movies, id) {
    return movies.find((movie) => (movie.id === id));
}

function validateMovieForm({ title, year, runtime, genre, director, poster }) {
    let { messages } = validator;
    let errorMsg = {};

    errorMsg = validator.validateRequiredFields({ title, year, runtime, genre, director })

    title = formatTitle(title);

    if (!errorMsg.title && validator.isEmpty(title)) {
        errorMsg.title = messages.invalid("title");
    }

    if (!errorMsg.year && !validator.isValidYear(year)) {
        errorMsg.year = messages.invalid("year");
    }

    if (!validator.isEmpty(poster) && !validator.isValidURL(poster)) {
        errorMsg.poster = messages.invalid("poster");
    }

    return errorMsg
}

function formatText(text) {
    let regMultiSpaces = /\s+/g;

    return text.replace(regMultiSpaces, " ").trim();
}

function formatTitle(title) {
    let regFilterLetters = /[^a-z 0-9 :'-]/g
    let regFirstLetter = /\b[a-z]/g;
    let regMultiSpaces = /\s+/g;

    return title.toLowerCase()
        .replace(regFilterLetters, "")
        .replace(regFirstLetter, (letter) => (letter.toUpperCase()))
        .replace(regMultiSpaces, " ")
        .trim();
}