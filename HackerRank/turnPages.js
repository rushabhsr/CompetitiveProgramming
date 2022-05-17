
function pageCount(last_page, pageToBeReached) {
    // if (pageToBeReached >= last_page - 1 || pageToBeReached == 1) {
    //     return 0
    // }
    // if (pageToBeReached <= 3 || pageToBeReached >= last_page - 3) {
    //     return 1
    // }
    let turnsFromBack = Math.floor((last_page - pageToBeReached) / 2)
    let turnsFromFront = Math.floor(pageToBeReached / 2)
    console.log("Back: " + turnsFromBack + " Front:" + turnsFromFront);

    return Math.min(turnsFromFront, turnsFromBack)
}



// case that did not pass as even number of pages given
let lastPage = 6
let pageToBeReached = 5
console.log(pageCount(lastPage, pageToBeReached))

1
23
45
67
89
1011
1213
1415