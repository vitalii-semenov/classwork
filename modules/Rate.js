const exchange = function () {
    if (arguments[0] === 'UAH') {
        return 1;
    } else if (arguments[0] === 'USD') {
        return (1 / 27).toFixed(3);
    } else if (arguments[0] === 'GBR') {
        return (1 / 35).toFixed(3);
    } else if (arguments[0] === 'EUR') {
        return (1 /31).toFixed(3);
    }
}

export default exchange;