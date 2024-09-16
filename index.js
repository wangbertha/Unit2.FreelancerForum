// #region State
let listingPropertyLabels = ['Name', 'Occupation', 'Starting Price'];
let listingPropertyCodes = ['name', 'occupation', 'startingPrice'];
let listings = [
    {
        name: 'Alice',
        occupation: 'Writer',
        startingPrice: 30,
    },
    {
        name: 'Bob',
        occupation: 'Teacer',
        startingPrice: 50,
    },
    {
        name: 'Carol',
        occupation: 'Programmer',
        startingPrice: 70,
    },
];
let aveStartingPrice = listings.reduce((total, listing) => total += listing.startingPrice, 0) / listings.length;

// #region Render
function render() {
    // Render average starting price
    const $aveStartingPrice = document.querySelector('#ave-starting-price');
    $aveStartingPrice.textContent = `The average starting price is $${aveStartingPrice}.`

    // Render table
    const $table = document.querySelector('#freelancer-listings');

    // Render table header row
    const $headerRow = document.createElement('tr');
    const $headerNames = listingPropertyLabels.map((propertyName) => {
        const $headerName = document.createElement('th');
        $headerName.textContent = propertyName;
        return $headerName;
    })
    $headerRow.replaceChildren(...$headerNames);
    $table.replaceChildren($headerRow);

    // Render listing rows
    const $tableContent = listings.map((listing) => {
        const $row = document.createElement('tr');
        const $rowContent = listingPropertyCodes.map((code) => {
            const $cell = document.createElement('td');
            $cell.textContent = listing[code];
            return $cell;
        })
        $row.replaceChildren(...$rowContent);
        return $row;
    })
    $table.append(...$tableContent);
}

render();