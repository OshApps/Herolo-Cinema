
const messages = {
    required: "This field is required",
    invalid: (name) => (`Please enter a valid ${name}`),
    exist: (name) => (`The ${name} is already exist`)
}


export default {
    isEmpty,
    isValidYear,
    messages
};


function isEmpty(str) {
    return (!str || 0 === str.length);
}

function isValidYear(yaer) {
    let reg = /^[0-9]+$/;
    let current_year = new Date().getFullYear();

    return reg.test(yaer) && yaer.length == 4 && (yaer <= current_year);
}
