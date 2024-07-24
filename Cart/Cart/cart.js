// const dataProduct = [
//     {
//         id: 1,
//         name: "GAN 11 M Pro 2021 | Phiên bản giới hạn mùa hè",
//         image: "../Cart-img/summer2.webp",
//         price: 100000,
//         quantity: 1
//     },
//     {
//         id: 2,
//         name: "Rubik 3x3 Moyu Aolong V2",
//         image: "../Cart-img/summer3.webp",
//         price: 200000,
//         quantity: 1
//     },
//     {
//         id: 3,
//         name: "Rubik 3x3 Moyu Aolong V2",
//         image: "../Cart-img/summer3.webp",
//         price: 700000,
//         quantity: 1
//     },
//     {
//         id: 4,
//         name: "Rubik 3x3 Moyu Aolong V2",
//         image: "../Cart-img/summer3.webp",
//         price: 500000,
//         quantity: 1
//     }
//     // Thêm sản phẩm khác nếu cần
// ];

// // Function to render the products into the cart
// function renderCartProducts() {
//     const cartProductContainer = document.querySelector('.cart-product');
//     const cartTable = document.createElement('table');
//     cartTable.className = 'cart-information';

//     // Header row
//     const headerRow = `
//         <tr class="column-1">
//             <td class="c1:r1"></td>
//             <td class="c1-r2"><b>Sản Phẩm</b></td>
//             <td class="c1-r3"><b>Đơn Giá</b></td>
//             <td class="c1-r4"><b>Số Lượng</b></td>
//             <td class="c1-r5"><b>Tạm Tính</b></td>
//             <td class="c1-r6"><b>Thao Tác</b></td>
//         </tr>`;
//     cartTable.innerHTML += headerRow;

//     // Product rows
//     dataProduct.forEach(product => {
//         const tamtinh = formatCurrency(product.price * product.quantity);

//         const productRow = `
//             <tr class="column-2">
//                 <td class="c2:r1">
//                     <input type="checkbox" id="check-${product.id}" onchange="updateTotalPrice()">
//                 </td>
//                 <td class="c2-r2">
//                     <div class="picture">
//                         <img src="${product.image}" alt="${product.name}">
//                     </div>
//                     <div class="infomation">${product.name}</div>
//                 </td>
//                 <td class="c2-r3">
//                     <p class="cost">${formatCurrency(product.price)}</p>
//                 </td>
//                 <td class="c2-r4">
//                     <button style="text-align: center; width: 15%;" onclick="decrementValue(${product.id})" class="decrement">-</button>
//                     <input style="text-align: center; width: 30%;" type="text" id="number-${product.id}" value="${product.quantity}" oninput="updateQuantity(${product.id}, this.value)">
//                     <button style="text-align: center; width: 15%;" onclick="incrementValue(${product.id})" class="increment">+</button>
//                 </td>
//                 <td class="c2-r5">
//                     <p class="money" id="subtotal-${product.id}">${tamtinh}</p>
//                 </td>
//                 <td class="c2-r6">
//                     <a href="#" onclick="removeProduct(${product.id})"><i class="fa-solid fa-trash" style="color : red;"></i></a>
//                 </td>
//             </tr>`;
//         cartTable.innerHTML += productRow;
//     });

//     // Append the table to the cartProductContainer
//     cartProductContainer.innerHTML = '';
//     cartProductContainer.appendChild(cartTable);

//     // Update total price
//     updateTotalPrice();
//     updateSubtotal();
// }

// // Function to format number as VND currency
// function formatCurrency(value) {
//     return value.toLocaleString('vi-VN', {style: 'currency', currency: 'VND'}).replace('₫', 'VND');
// }

// // Chức năng cập nhật tổng giá dựa trên các hộp kiểm đã chọn
// function updateTotalPrice() {
//     let totalPrice = 0;
//     dataProduct.forEach(product => {
//         const checkbox = document.querySelector(`#check-${product.id}`);
//         if (checkbox && checkbox.checked) {
//             totalPrice += product.price * product.quantity;
//         }
//     });
//     const tong_html = document.querySelector('#totalSum');
//     tong_html.innerHTML = formatCurrency(totalPrice);
// }

// // Chức năng cập nhật tổng giá cho tất cả sản phẩm
// function updateSubtotal() {
//     let subtotal = 0;
//     dataProduct.forEach(product => {
//         subtotal += product.price * product.quantity;
//     });
//     const tamtinh_html = document.querySelector('#totalPrice');
//     tamtinh_html.innerHTML = formatCurrency(subtotal);
// }

// // Hàm cập nhật số lượng từ đầu vào
// function updateQuantity(id, value) {
//     const product = dataProduct.find(p => p.id === id);
//     if (product) {
//         const quantity = parseInt(value);
//         if (quantity > 0) {
//             product.quantity = quantity;
//             const tamtinh = formatCurrency(product.price * product.quantity);
//             document.querySelector(`#subtotal-${id}`).innerHTML = tamtinh;
//             updateSubtotal();
//             updateTotalPrice();
//         }
//     }
// }

// // Hàm xử lý tăng giảm
// function incrementValue(id) {
//     const product = dataProduct.find(p => p.id === id);
//     if (product) {
//         product.quantity += 1;
//         renderCartProducts();
//     }
// }

// function decrementValue(id) {
//     const product = dataProduct.find(p => p.id === id);
//     if (product && product.quantity > 1) {
//         product.quantity -= 1;
//         renderCartProducts();
//     }
// }

// function removeProduct(id) {
//     const productIndex = dataProduct.findIndex(p => p.id === id);
//     if (productIndex !== -1) {
//         dataProduct.splice(productIndex, 1);
//         renderCartProducts();
//     }
// }

// // Kết xuất ban đầu
// document.addEventListener('DOMContentLoaded', renderCartProducts);
const dataProduct = [
    {
        id: 1,
        name: "GAN 11 M Pro 2021 | Phiên bản giới hạn mùa hè",
        image: "../Cart-img/summer2.webp",
        price: 10000,
        quantity: 1
    },
    {
        id: 2,
        name: "Rubik 3x3 Moyu Aolong V2",
        image: "../Cart-img/summer3.webp",
        price: 20000,
        quantity: 1
    },
    {
        id: 3,
        name: "Rubik 2x2 Moyu Aolong V10",
        image: "../Cart-img/summer3.webp",
        price: 50000,
        quantity: 1
    },
    {
        id: 4,
        name: "Rubik 9x9 Moyu Aolong V2",
        image: "../Cart-img/summer3.webp",
        price: 40000,
        quantity: 1
    }
    // Thêm sản phẩm khác nếu cần
];

// Function to render the products into the cart
function renderCartProducts() {
    const searchTerm = document.querySelector('#searchInput').value.toLowerCase();
    const cartProductContainer = document.querySelector('.cart-product');
    const cartTable = document.createElement('table');
    cartTable.className = 'cart-information';

    // Header row
    const headerRow = `
        <tr class="column-1">
            <td class="c1:r1"></td>
            <td class="c1-r2"><b>Sản Phẩm</b></td>
            <td class="c1-r3"><b>Đơn Giá</b></td>
            <td class="c1-r4"><b>Số Lượng</b></td>
            <td class="c1-r5"><b>Tạm Tính</b></td>
            <td class="c1-r6"><b>Thao Tác</b></td>
        </tr>`;
    cartTable.innerHTML += headerRow;

    // Product rows
    dataProduct.forEach(product => {
        // Filter products based on search term
        if (product.name.toLowerCase().includes(searchTerm)) {
            const tamtinh = formatCurrency(product.price * product.quantity);

            const productRow = `
                <tr class="column-2">
                    <td class="c2:r1">
                        <input type="checkbox" id="check-${product.id}" onchange="updateTotalPrice()">
                    </td>
                    <td class="c2-r2">
                        <div class="picture">
                            <img src="${product.image}" alt="${product.name}">
                        </div>
                        <div class="infomation">${product.name}</div>
                    </td>
                    <td class="c2-r3">
                        <p class="cost">${formatCurrency(product.price)}</p>
                    </td>
                    <td class="c2-r4">
                        <button style="text-align: center; width: 15%;" onclick="decrementValue(${product.id})" class="decrement">-</button>
                        <input style="text-align: center; width: 30%;" type="text" id="number-${product.id}" value="${product.quantity}" oninput="updateQuantity(${product.id}, this.value)">
                        <button style="text-align: center; width: 15%;" onclick="incrementValue(${product.id})" class="increment">+</button>
                    </td>
                    <td class="c2-r5">
                        <p class="money" id="subtotal-${product.id}">${tamtinh}</p>
                    </td>
                    <td class="c2-r6">
                        <a href="#" onclick="removeProduct(${product.id})"><i class="fa-solid fa-trash" style="color : red;"></i></a>
                    </td>
                </tr>`;
            cartTable.innerHTML += productRow;
        }
    });

    // Append the table to the cartProductContainer
    cartProductContainer.innerHTML = '';
    cartProductContainer.appendChild(cartTable);

    // Update total price
    updateTotalPrice();
    updateSubtotal();
}

// Function to format number as VND currency
function formatCurrency(value) {
    return value.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }).replace('₫', 'đ');
}

// Function to update total price based on selected checkboxes
function updateTotalPrice() {
    let totalPrice = 0;
    dataProduct.forEach(product => {
        const checkbox = document.querySelector(`#check-${product.id}`);
        if (checkbox && checkbox.checked) {
            totalPrice += product.price * product.quantity;
        }
    });
    const tong_html = document.querySelector('#totalSum');
    tong_html.innerHTML = formatCurrency(totalPrice);
}

// Function to update subtotal price for all products
function updateSubtotal() {
    let subtotal = 0;
    dataProduct.forEach(product => {
        subtotal += product.price * product.quantity;
    });
    const tamtinh_html = document.querySelector('#totalPrice');
    tamtinh_html.innerHTML = formatCurrency(subtotal);
}

// Function to update quantity from input
function updateQuantity(id, value) {
    const product = dataProduct.find(p => p.id === id);
    if (product) {
        const quantity = parseInt(value);
        if (quantity > 0) {
            product.quantity = quantity;
            const tamtinh = formatCurrency(product.price * product.quantity);
            document.querySelector(`#subtotal-${id}`).innerHTML = tamtinh;
            updateSubtotal();
            updateTotalPrice();
        }
    }
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
        renderCartProducts();
    }
}

function removeProduct(id) {
    const productIndex = dataProduct.findIndex(p => p.id === id);
    if (productIndex !== -1) {
        dataProduct.splice(productIndex, 1);
        renderCartProducts();
    }
}

// Function to handle search input
function searchProducts() {
    renderCartProducts();
}

// Initial render
document.addEventListener('DOMContentLoaded', renderCartProducts);
