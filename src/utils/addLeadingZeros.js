const addLeadingZeros = (number) => {
    return ('00' + number.toString()).slice(-3);
}

export default addLeadingZeros;