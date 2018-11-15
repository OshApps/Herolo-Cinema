
const messages = {
    required: "This field is required",
    invalid: (name) => (`Please enter a valid ${name}`),
    exist: (name) => (`The ${name} is already exist`)
}


export default {
    isEmpty,
    isValidYear,
    isValidURL,
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

function isValidURL(url) {
    var reg = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
    return reg.test(url);
}