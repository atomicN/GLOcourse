const stringCheck = string => {
    if (typeof string !== "string") {
        console.log('invalid input : not a string');
        return;
    }
    string.trim();
    if (string.length > 30) return string.slice(0,30) + '...';
    return string;
};
