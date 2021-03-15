const countEvenNumber = (inputArray) => {
    let count = 0;
    inputArray.forEach(element => {
        if(element % 2 === 0) {
            count ++;
        }
    });
    return count;
}

module.exports = countEvenNumber;