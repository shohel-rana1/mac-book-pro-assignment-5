//to update promo code
function promoUpdate() {
    const inputValueField = document.getElementById('promo-code');
    const inputValue = inputValueField.value;

    let totalPrice = parseFloat(document.getElementById('total-cost').innerText);
    if (inputValue == 'stevekaku') {
        totalPrice = totalPrice * 0.8;
    }
    const finalTotal = document.getElementById('grand-total');
    finalTotal.innerText = totalPrice;
    inputValueField.value = '';
}



//set input value
function setValue(inputId, value) {
    const memoryInput = document.getElementById(inputId);
    memoryInput.innerText = value;

    updateTotalPrice();
}


//update total price
function updateTotalPrice() {
    const basePrice = parseFloat(document.getElementById('base-cost').innerText);
    const memoryPrice = parseFloat(document.getElementById('memory-cost').innerText);
    const storagePrice = parseFloat(document.getElementById('storage-cost').innerText);
    const deliveryPrice = parseFloat(document.getElementById('delivery-cost').innerText);
    const totalPrice = basePrice + memoryPrice + storagePrice + deliveryPrice;
    const totalPriceField = document.getElementById('total-cost');
    totalPriceField.innerText = totalPrice;
    promoUpdate();
}

// to handle memory button event 
document.getElementById('8gb-memory').addEventListener('click', function () {

    setValue('memory-cost', 0);

});
//for 16gb memory button
document.getElementById('16gb-memory').addEventListener('click', function () {

    setValue('memory-cost', 180);

});
//for 256gb storage button handle
document.getElementById('256gb-storage').addEventListener('click', function () {

    setValue('storage-cost', 0);

});
//for 512gb storage button handle
document.getElementById('512gb-storage').addEventListener('click', function () {

    setValue('storage-cost', 100);

});
//for 1tb storage button handle
document.getElementById('1tb-storage').addEventListener('click', function () {

    setValue('storage-cost', 180);

});
// free delivery button handling
document.getElementById('free-delivery').addEventListener('click', function () {

    setValue('delivery-cost', 0);

});
// charged button handling 
document.getElementById('charged-delivery').addEventListener('click', function () {

    setValue('delivery-cost', 20);

});

// apply button event handling
document.getElementById('apply-promo').addEventListener('click', function () {

    promoUpdate();
});


