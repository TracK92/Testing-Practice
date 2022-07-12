const stringLength = (string) => {
    string.split('');
    if(string.length > 1 && string.length < 10) {
        return string.length;
    } else {
        return;
    }
}

module.exports = stringLength;
