//linked to welcome.html

// fetch("https://github.com", {headers: {'Authorization': 'token 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'}})
//     .then(username => console.log(username))

// create a function that takes a github username ✅
// that returns the date of the last commit

function randomUser(input) {
    console.log(input);
    fetch(`https://api.github.com/users/${input}`, {headers: {'Authorization': '_j8LaJBe2hrqQJAzVA3btdyq4eXTQdB29jSJt'}})
        .then(response => response.json())
        .then(data => {
            console.log(data);
            console.log("last commit time as follows, " + data.updated_at);
            return data.updated_at;
        })
        .catch(error => console.log(error));
}

randomUser("radicaladi");

//
// function wait() {
//     return fetch('https://api.github.com/users/radicaladi', {headers: {'Authorization': '_j8LaJBe2hrqQJAzVA3btdyq4eXTQdB29jSJt'}})
//
// }
//
// function wait() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (Math.random() > 0.1) {
//                 resolve('Here is your data: ...');
//             } else {
//                 reject('Network Connection Error!');
//             }
//         }, 1500);
//     });
// }
//
// const wade = wait();
// console.log(wade); // pending promise
// wade.then(message => console.log('Promise resolved!', message));
// // if resolved, will log "Promise resolved!" and "Here is your data: ..."
// wade.catch(message => console.log('Promise rejected!', message));
// // if rejected, will log "Promise rejected!" and "Network Connection Error!"



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