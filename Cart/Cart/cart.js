const dataProduct = [
    {
        id: 1,
        name: "GAN 11 M Pro 2021 | Phiên bản giới hạn mùa hè",
        image: "../Cart-img/summer2.webp",
        price: 59.99,
        quantity: 1
    },
    {
        id: 2,
        name: "Rubik 3x3 Moyu Aolong V2",
        image: "../Cart-img/summer3.webp",
        price: 10.99,
        quantity: 1
    }
    // Thêm sản phẩm khác nếu cần
];

// Function to render the products into the cart
function renderCartProducts() {
    const cartProductContainer = document.querySelector('.cart-product');
    const cartTable = document.createElement('table');
    cartTable.className = 'cart-information';

    // Header row
    const headerRow = `
        <tr class="column-1">
            <td class="c1:r1"></td>
            <td class="c1-r2">Sản Phẩm</td>
            <td class="c1-r3">Đơn Giá</td>
            <td class="c1-r4">Số Lượng</td>
            <td class="c1-r5">Tạm Tính</td>
            <td class="c1-r6">Thao Tác</td>
        </tr>`;
    cartTable.innerHTML += headerRow;

    // Product rows
    dataProduct.forEach(product => {
        console.log(product.id)
        const tamtinh = (product.price * product.quantity).toFixed(2);
        const tamtinh_html = document.querySelector('#totalPrice');
        tamtinh_html.innerHTML = tamtinh
        const productRow = `
            <tr class="column-2">
                <td class="c2:r1">
                    <input type="checkbox" id="check-${product.id}">
                </td>
                <td class="c2-r2">
                    <div class="picture">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="infomation">${product.name}</div>
                </td>
                <td class="c2-r3">
                    <p class="cost">$${product.price.toFixed(2)}</p>
                </td>
                <td class="c2-r4">
                    <button style="text-align: center ; width: 15%; " onclick="decrementValue(${product.id})" class="decrement">-</button>
                    <input style="text-align: center ; width: 30%; " type="text" id="number-${product.id}" value="${product.quantity}">
                    <button style="text-align: center ; width: 15%; " onclick="incrementValue(${product.id})" class="increment">+</button>
                </td>
                <td class="c2-r5">
                    <p class="money">$${tamtinh}</p>
                </td>
                <td class="c2-r6">
                    <a href="#" onclick="removeProduct(${product.id})"><i class="fa-solid fa-trash"></i></a>
                </td>
            </tr>`;
        cartTable.innerHTML += productRow;
    });

    // Append the table to the cartProductContainer
    cartProductContainer.innerHTML = '';
    cartProductContainer.appendChild(cartTable);
}

// Functions to handle increment and decrement
function incrementValue(id) {
    const product = dataProduct.find(p => p.id === id);
    if (product) {
        product.quantity += 1;
        renderCartProducts();
    }
}

function decrementValue(id) {
    const product = dataProduct.find(p => p.id === id);
    if (product && product.quantity > 1) {
        product.quantity -= 1;
        renderCartProducts();``
    }
}

function removeProduct(id) {
    const productIndex = dataProduct.findIndex(p => p.id === id);
    if (productIndex !== -1) {
        dataProduct.splice(productIndex, 1);
        renderCartProducts();
    }
}

// Initial render
document.addEventListener('DOMContentLoaded', renderCartProducts);
