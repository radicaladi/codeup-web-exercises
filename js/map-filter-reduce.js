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
    // old way:
    // function findLongestEmail(array) {
    //     var longestEmail = "";
    //     array.forEach(function(email) {
    //         if(email.length > longestEmail.length) {
    //             longestEmail = email;
    //         }
    //     });
    //     return longestEmail;
    // }
    //
    // console.log(findLongestEmail(emCollection));
    // console.log("//////////");

        // new way:
        let longestEm = emCollection.reduce((previousValue, currentValue) => {
            if (previousValue.length > currentValue.length) {
                return previousValue;
            }
            return currentValue;
        });
        console.log(longestEm);
        console.log("//////////");

// use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
    // old way:
    // let namesCol = [];
    // users.forEach(function (user) {
    //     namesCol.push(user.name);
    // });
    // console.log(namesCol);
    //
    // let newNCol = namesCol.join(", ");
    // console.log(newNCol);
    // console.log("//////////");

        // new way 1 (map first):
        // let names = users.map(user => user.name);
        // console.log(names);
        //
        // let uNames = names.reduce((previousValue, currentValue, index) => {
        //     if ( index === 0 ) {
        //         return currentValue;
        //     }
        //     return previousValue + ', ' + currentValue;
        // }, '');
        //
        // console.log(uNames);
        // console.log("//////////");

            // new way 2 (w/o mapping):
            let usrNames = users.reduce((previousValue, currentValue, index) => {
                if (index === 0) {
                    return currentValue.name;
                }
                return previousValue + ', ' + currentValue.name;
            }, '');

            console.log(usrNames);
            console.log("//////////");

// BONUS
// use .reduce to get the unique list of languages from the list of users.

// let langMap = users.map(user => user.languages);
// let uniqLang = langMap.reduce((previousValue, currentValue, currentIndex) => {
//     for (let i = 0; i < currentValue.length; i++){
//         if (currentIndex=== 0) {
//             return currentValue;
//         } else if (!previousValue.includes(currentValue[i])) {
//             previousValue.push(currentValue[i]);
//         }
//     }
//     return previousValue;
// }, [])
//
// console.log("stop2");
// console.log(langMap);
// console.log("/////");
// console.log(`unique languages are: ${uniqLang}`);
// console.log("stop");

    let uniqlo = users.reduce((previous, current) => {
        let currentLang = current.languages;
        for (let i = 0; i < currentLang.length; i++){
            if (!previous.includes(currentLang[i])) {
                previous.push(currentLang[i]);
            }
        }
        return previous;
    }, []);

    console.log(`These are the unique languages: ${uniqlo}.`);