function libraryFine(d1, m1, y1, d2, m2, y2) {
    if ((y2 > y1) || (m2 > m1 && y1 === y2) || (d1 < d2 && m1 === m2 && y1 === y2)) {
        return 0
    }
    if (y1 > y2) {
        return 10000;
    }
    if (m1 > m2 && y1 === y2) {
        return 500 * (m1 - m2);
    }
    return (d1 - d2) * 15;
}
let date = [14, 12, 2015, 14, 12, 2015];
console.log(libraryFine(...date))