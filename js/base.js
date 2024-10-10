$(document).ready(function () {
  $('#sidebarCollapse').on('click', function () {
    $('#sidebar').toggleClass('active');
  });
});

function showSection(section) {

  var sections = document.querySelectorAll('.content-section');
  sections.forEach(function (sec) {
    sec.style.display = 'none';
  });

  document.getElementById(section).style.display = 'block';
  switch (section) {
    case "notbooks":
      loadNotebookList();
      break;
    case "writing":
      loadWritingList();
      break;
  }
}

window.onload = function () {
  showSection('notebooks');
}

function createProductCard(product) {
  const card = document.createElement('div');
  card.className = 'product-card';

  const img = document.createElement('img');
  img.src = product.imageUrl;
  img.alt = product.name;
  card.appendChild(img);

  const name = document.createElement('h3');
  name.textContent = product.name;
  card.appendChild(name);

  const price = document.createElement('p');
  price.textContent = `מחיר: ₪${product.price}`;
  card.appendChild(price);

  const button = document.createElement('button');
  button.textContent = 'הוסף לסל';
  button.className = 'add-to-cart';
  button.onclick = function () {
    alert(`${product.name} נוסף לסל`);
  };
  card.appendChild(button);

  return card;
}
const notbooks = [{ name: "notebook", imageUrl: "../assets/notbook.png", price: "50" }, { name: "notebook", imageUrl: "../assets/notbook.png", price: "50" }
  , { name: "notebook", imageUrl: "../assets/notbook.png", price: "50" }
  , { name: "notebook", imageUrl: "../assets/notbook.png", price: "50" }
  , { name: "notebook", imageUrl: "../assets/notbook.png", price: "50" }
  , { name: "notebook", imageUrl: "../assets/notbook.png", price: "50" }
]


function loadNotebookList() {
  const notebookList = document.getElementById('notebook-list');
  notbooks.map(n => {
    const productCard = createProductCard(n);
    notebookList.appendChild(productCard);
  })

}

function loadWritingList() {
  const writingList = document.getElementById('writing-list');
  wrtingList.map(n => {
    const productCard = createProductCard(n);
    notebookList.appendChild(productCard);
  })

}

window.onload = loadNotebookList;