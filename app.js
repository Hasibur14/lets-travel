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
        selectedPlace.appendChild(li);

        const totalCost = document.getElementById('total-cost').innerText;
        const convertedTotalCost = parseInt(totalCost);
        const sum  = convertedTotalCost + parseInt(price);

        const grandTotal = document.getElementById('grand-total').innerText;
        const convertedGrandTotal = parseInt(grandTotal);
        const sum2 = convertedGrandTotal + sum;
         console.log(grandTotal);

         setInnerText('grand-total',sum2)
        setInnerText('total-cost',sum)
        setInnerText('cart-count', count)
    });
}

function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}