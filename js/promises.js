//linked to welcome.html

// fetch("https://github.com", {headers: {'Authorization': 'token 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'}})
//     .then(username => console.log(username))

// create a function that takes a github username ✅
// that returns the date of the last commit ✅

// function randomUser(input) {
//     console.log(input);
//     fetch(`https://api.github.com/users/${input}`, {headers: {'Authorization': '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'}})
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);
//             console.log("last commit time as follows, " + data.updated_at);
//             return data.updated_at;
//         })
//         .catch(error => console.log(error));
// }
//
// randomUser("radicaladi");

//
// function wait() {
//     return fetch('https://api.github.com/users/radicaladi', {headers: {'Authorization': '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'}})
//
// }
//
function wait(input) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.1) {
                resolve('Here is your data: ...');
            } else {
                reject('Network Connection Error!');
            }
        }, input);
    });
}

wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
wait(4000).then(() => console.log('You\'ll see this after 4 seconds'));


//********************** code for random github user generator
//
// function randomUser(input) {
//     console.log(input);
//     fetch(grgerbdb, agadfadfg).then(user => user.json()).then(grabbeduser => {
//         console.log(grabbeduser)
//         fetch(`https://api.github.com/users/${grabbeduser}`, {headers: {'Authorization': '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'}})
//             .then(response => response.json())
//             .then(data => {
//                 console.log(data);
//                 console.log("last commit time as follows, " + data.updated_at);
//                 return data.updated_at;
//             })
//             .catch(error => console.log(error));
//     })
//
// }
// console.log(randomUser("geraldmontero"));