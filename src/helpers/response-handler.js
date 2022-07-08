function success(value, message) {
    var response = {
        message: message,
        error: false,
        data: value,
    };
    return response;
}

function error(error, message) {
    var response = {
        message: message,
        error: true,
        data: error,
    };
    return response;
}

module.exports = { success, error };