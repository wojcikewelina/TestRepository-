// 3. Get current date/time and add 40 hours to it. Print resulting date.

function addTime(hoursToAdd) {

    var currentDate = new Date();
    console.log("aktualna data i godzina to: ", currentDate);
    currentDate.setHours(currentDate.getHours() + hoursToAdd);
    console.log("Data i godzina po dodaniu", hoursToAdd,"h to:", currentDate);
}

addTime(40);