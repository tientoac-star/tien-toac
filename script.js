const products = [
  {
    name: "Bó hoa cẩm tú cầu mix tulip",
    price: "2.050.000đ",
    img: "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=500&q=60"
  },
  {
    name: "Bó hoa form tròn tone hồng",
    price: "4.550.000đ",
    img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=500&q=60"
  },
  {
    name: "Bình hoa nhẹ nhàng",
    price: "4.050.000đ",
    img: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=500&q=60"
  },
  {
    name: "Bình hoa cổ điển",
    price: "10.000.000đ",
    img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=500&q=60"
  }
];

const container = document.getElementById("productList");

function renderProducts(list) {
  container.innerHTML = list.map(p => `
    <div class="product">
      <img src="${p.img}">
      <div class="product-name">${p.name}</div>
      <div class="product-price">${p.price}</div>
    </div>
  `).join("");
}

renderProducts(products);