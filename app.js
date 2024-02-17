const allButton = document.getElementsByClassName('add-btn');
let count = 0;
let totalCost = 0;
for (const btn of allButton) {
    btn.addEventListener('click', function (e) {
        count = count + 1;

        const placeName = e.target.parentNode.parentNode.childNodes[1].innerText;
        const price = e.target.parentNode.parentNode.childNodes[3].childNodes[1].innerText;

        const selectedPlace = document.getElementById('selected-place-container');
        const li = document.createElement('li');

        const p1 = document.createElement('p');
        p1.innerText = placeName;
        const p2 = document.createElement('p');
        p2.innerText = price;

        li.appendChild(p1);
        li.appendChild(p2);

        const budget = document.getElementById('budget');
        const convertedBudget = parseInt(budget);
        document.getElementById('budget').innerText = convertedBudget - parseInt(price);

        selectedPlace.appendChild(li);

        //calculate total price
        getTotalCost("total-cost", parseInt(price));

        //calculate grand price
        grandTotalCost("grand-total", parseInt(price));

        setInnerText('cart-count', count);
    });
};


//Total cost
function getTotalCost(id, value) {
    const totalCost = document.getElementById(id).innerText;
    const convertedTotalCost = parseInt(totalCost);
    const sum = convertedTotalCost + parseInt(value);
    setInnerText('total-cost', sum);
};


// grand Total
function grandTotalCost(category) {
    const totalCost = document.getElementById("total-cost").innerText;
    const convertedTotalCost = parseInt(totalCost);
    setInnerText('grand-total', convertedTotalCost);

    if (category === "bus") {
        setInnerText('grand-total', convertedTotalCost + 100);
    }
    else if (category === "train") {
        setInnerText('grand-total', convertedTotalCost - 200);
    }
    else if (category === "flight") {
        setInnerText('grand-total', convertedTotalCost + 500);
    }
    else {
        setInnerText("grand-total", convertedTotalCost);
    }
};



// Inner Text show
function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}
