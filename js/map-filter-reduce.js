const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// use .filter to create an array of user objects where each user has at least 3 languages in the languages array
    // old way:
    // let triLing = [];
    // users.forEach(function (user) {
    //     if (user.languages.length >= "3"){
    //         triLing.push(user);
    //     }
    // })
    // console.log(triLing)

        // new way:
        let triLingual = users.filter(user => user.languages.length >= "3");
        console.log(triLingual);
        console.log("//////////");

// use .map to create an array of strings where each element is a user's email address
    // old way:
    // let emColl = [];
    // users.forEach(function (user) {
    //     emColl.push(user.email);
    // })
    // console.log(emColl);
    // console.log("//////////")

        // new way:
        let emCollection = users.map(user => user.email);
        console.log(emCollection);
        console.log("//////////");

// use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average
let coExp = users.reduce((total, user) => {
    return total + user.yearsOfExperience;
}, 0);
let avgExp = coExp / users.length;
console.log(`total years of employee experiences is, ${coExp}.`);
console.log(`average years of employee experience is, ${avgExp}.`);
console.log("//////////")

// use .reduce to get the longest email from the list of users

let longestEm = emCollection.reduce((previousValue, currentValue) => {
    if (previousValue.length > currentValue.length) {
        return previousValue;
    }
    return currentValue;
});
console.log(longestEm)