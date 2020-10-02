// 2. Use Rest call to obtain JSON from API
// https://gorest.co.in/public-api/categories Parse JSON and check if category Movies exists.

const API_URL = "https://gorest.co.in/public-api/categories";

var dataFromAPI;

fetch(API_URL).
then(response => {
    return response.json();
}).then((respJSON) => {
    dataFromAPI = respJSON.data;
}).then(() => {
    checkCategory(dataFromAPI);
})

var serchedCategory = "Movies";

function checkCategory(arrey) {
    let found = arrey.filter((x) => {
        return x.name === serchedCategory;
    })
    if (found.length >= 1) {
        console.log(serchedCategory, "category exist!");
    } else {
        let numberOfserchedCategory = 0;
        arrey.forEach((x) => {
            if (x.name.includes(serchedCategory)) {
                console.log("This isn't category", serchedCategory, "but there is: " + x.name);
                numberOfserchedCategory++;
            }
        })
        if (numberOfserchedCategory == 0) {
            console.log("There is no", serchedCategory, "Category");
        };
    };
};