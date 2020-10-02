// For a given array of objects loop trough array 
// and list parameter1 of objects where paremeter2 contains a substring "toDO".

var arrey = [{
        parametr1: "Kraków",
        parametr2: "WaweltoDOCastle"
    },
    {
        parametr1: "Lwów",
        parametr2: "Opera"
    },
    {
        parametr1: "Praga",
        parametr2: "Most toDO"
    },
    {
        parametr1: "Paphos",
        parametr2: "Kot"
    }
];
var listOfParametr1 = [];
var i = 0;
arrey.forEach((x) => {
    if (x.parametr2.includes("toDO")) {
        listOfParametr1[i] = x.parametr1;
        i++;
    }
});

console.log(listOfParametr1)