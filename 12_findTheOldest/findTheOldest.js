const findTheOldest = function(people) {
    let missing = people.filter(person => person.yearOfDeath == undefined);
    let notMissing = people.filter(person => person.yearOfDeath !== undefined);
    if (missing == []) {
        let oldest = people.sort((lastPerson, nextPerson) => (lastPerson.yearOfDeath-lastPerson.yearOfBirth > nextPerson.yearOfDeath-nextPerson.yearOfBirth) ? -1 : 1);
        return oldest[0];
    } else {
        let missingCalculated = missing.map(person => {
            person.yearOfDeath = 2023;
            return {name : `${person.name}`, yearOfBirth : person.yearOfBirth, yearOfDeath : person.yearOfDeath};
        })
        let combined = notMissing.concat(missingCalculated);
        let combinedOldest = combined.sort((lastPerson, nextPerson) => (lastPerson.yearOfDeath-lastPerson.yearOfBirth > nextPerson.yearOfDeath-nextPerson.yearOfBirth) ? -1 : 1);
        return combinedOldest[0];
    }
};

// Do not edit below this line
module.exports = findTheOldest;
