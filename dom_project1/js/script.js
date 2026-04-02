const plusButtons = document.querySelectorAll(".fa-plus-circle");
const minusButtons = document.querySelectorAll(".fa-minus-circle");
const deleteButtons = document.querySelectorAll(".fa-trash-alt");
const heartButtons = document.querySelectorAll(".fa-heart");

function updateTotalPrice() {
  const products = document.querySelectorAll(".card");

  let total = 0;

  products.forEach((product) => {
    const unitPriceText = product.querySelector(".unit-price").textContent;
    const quantityText = product.querySelector(".quantity").textContent;

    const unitPrice = parseInt(unitPriceText);
    const quantity = parseInt(quantityText);

    total += unitPrice * quantity;
  });

  document.querySelector(".total").textContent = total + " $";
}

plusButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const quantitySpan = button.nextElementSibling;
    quantitySpan.textContent = parseInt(quantitySpan.textContent) + 1;
    updateTotalPrice();
  });
});

minusButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const quantitySpan = button.previousElementSibling;

    let quantity = parseInt(quantitySpan.textContent);

    if (quantity > 0) {
      quantitySpan.textContent = quantity - 1;
      updateTotalPrice();
    }
  });
});

deleteButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const productCard = button.closest(".card-body");
    productCard.remove();
    updateTotalPrice();
  });
});

heartButtons.forEach((button) => {
  button.addEventListener("click", function () {
    button.classList.toggle("text-danger");
  });
});

updateTotalPrice();