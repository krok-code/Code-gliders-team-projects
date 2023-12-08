//******* Products List *********//
document.addEventListener('DOMContentLoaded', async () => {
  const productListElement = document.querySelector('.products-list-general');

  if (!productListElement) {
    console.error("Element with class 'products-list-general' not found.");
    return;
  }

  function createProductCard(product) {
    const cartButtonText = checkIfInCart(product._id) ? '' : 'Add to Cart';

    return `
    <li class="product-card">
      <img width="140px" height="140px" class="product-image" ${
        product.img ? `src="${product.img}"` : 'src="./default-image.jpg"'
      } alt="${product.name}">
      <h3 class="product-name">${product.name}</h3>
      <p class="product-category">
        <span class="label-category">Category:</span> ${product.category} 
      </p>
      <p class="product-size">
        <span class="label-size">Size:</span> ${product.size}
      </p>
      <p class="product-popularity">
        <span class="label-popularity">Popularity:</span> ${product.popularity}
      </p>
      <p class="product-price">$${product.price.toFixed(2)}</p>
      <button class="cart-button" data-product-id="${
        product._id
      }">${cartButtonText}</button>
    </li>`;
  }

  async function renderProductList(products) {
    const productListHTML = products.map(createProductCard).join('');
    productListElement.innerHTML = productListHTML;
  }

  function updatePagination(currentPage, totalPages) {}

  function checkIfInCart(productId) {}

  async function fetchProducts() {}

  fetchProducts();
});
//******* Products List END *********//
