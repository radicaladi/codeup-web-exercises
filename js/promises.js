//linked to welcome.html

// fetch("https://github.com", {headers: {'Authorization': 'token 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'}})
//     .then(username => console.log(username))

// create a function that takes a github username ✅
// that returns the date of the last commit


fetch('https://api.github.com/users/radicaladi', {headers: {'Authorization': 'token '}})
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log(data.updated_at);
    })
    .catch(error => console.log(error));

function wait (number) {

}