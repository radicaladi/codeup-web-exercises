//linked to welcome.html

// fetch("https://github.com", {headers: {'Authorization': 'token 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'}})
//     .then(username => console.log(username))

// create a function that takes a github username ✅
// that returns the date of the last commit ✅

// function randomUser(input) {
//     console.log(input);
//     fetch(`https://api.github.com/users/${input}/events/public`, {headers: {'Authorization': gKey}})
//         .then(response => response.json())
//         .then(responseObj => {
//             console.log(responseObj);
//             console.log("last commit time as follows, " + responseObj[0].created_at);
//             return data.created_at;
//         })
//         .catch(error => console.log(error));
// }
//
// randomUser("radicaladi");


function wait(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
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