function pageRequirements(quantity1, quantity2, quantity3) {
    const book1TotalPage = 100 * quantity1;
    const book2TotalPage = 200 * quantity2;
    const book3TotalPage = 300 * quantity3;
    const totalPage = book1TotalPage + book2TotalPage + book3TotalPage;
    return totalPage;
}
const getTotalPage = pageRequirements(1, 2, 1);
console.log("Total Book Page:", getTotalPage);