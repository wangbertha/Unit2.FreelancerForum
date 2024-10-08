// #region State
let listingPropertyCodes = ['name', 'occupation', 'startingPrice'];
let listings = [
    {
        name: 'Alice',
        occupation: 'Writer',
        startingPrice: 30,
    },
    {
        name: 'Bob',
        occupation: 'Teacher',
        startingPrice: 50,
    },
    {
        name: 'Carol',
        occupation: 'Programmer',
        startingPrice: 70,
    },
];
let aveStartingPrice = calculateAveStartingPrice();

const NAMES = ['Annabeth', 'Troy', 'Brooke', 'Toby'];
const OCCUPATIONS = ['Clerk', 'Chef', 'Content Creator', 'UX Designer'];
const STARTING_PRICES = [30, 50, 70, 75, 90, 100, 120];

function addListing() {
    const name = NAMES[Math.floor(Math.random() * NAMES.length)];
    const occupation = OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];
    const startingPrice = STARTING_PRICES[Math.floor(Math.random() * STARTING_PRICES.length)];
    listings.push({ name, occupation, startingPrice });

    aveStartingPrice = calculateAveStartingPrice();
}

function calculateAveStartingPrice() {
    const ave = listings.reduce((total, listing) => total += listing.startingPrice, 0) / listings.length;
    return Math.round(ave * 100) / 100;
}

// #region Render
function render() {
    // Render average starting price
    const $aveStartingPrice = document.querySelector('#ave-starting-price');
    $aveStartingPrice.textContent = `The average starting price is $${aveStartingPrice}.`

    // Render table
    const $tableBody = document.querySelector('#freelancer-listings');

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
    $tableBody.replaceChildren(...$tableContent);
}

// #region Script
const intervalId = setInterval(() => {
    addListing();
    render();
}, 5000)

render();