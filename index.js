function introduction(name) {
    return `Hi, my name is ${name}.`
}

function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

// The function below satisfied tests 3 and 4 of the lab,
// but this is not how this function was supposed to be structured
// according to the lab's directions

/*
function introductionWithLanguageOptional(name, language) {
    if (language) {
        return `Hi, my name is ${name} and I am learning to program in ${language}.`
    } else {
        return `Hi, my name is ${name} and I am learning to program in JavaScript.`
    }
}
*/

function introductionWithLanguageOptional(name, language = 'JavaScript') {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

console.log(introduction('Megan'));
console.log(introductionWithLanguage('Megan', 'Python'));
console.log(introductionWithLanguageOptional('Megan', 'Ruby'));
console.log(introductionWithLanguageOptional('Megan'));