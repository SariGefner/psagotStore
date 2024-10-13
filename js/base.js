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
    case "notebooks":
      loadNotebookList();
      break;
    case "writing":
      loadWritingList();
      break;
  }
}

window.onload = function () {
  loadNotebookList();
  loadWritingList();
  showSection('notebooks');

}

function createProductCard(product) {
  const card = document.createElement('div');
  card.className = 'product-card';


  const img = document.createElement('img');
  img.src = product.image;
  img.alt = product.title;
  card.appendChild(img);


  const title = document.createElement('h3');
  title.textContent = product.title;
  card.appendChild(title);

    const price = document.createElement('p');
  price.textContent = `מחיר: ₪${product.price}`;
  card.appendChild(price);

if(product.tags){
  const tags = document.createElement('p');
  tags.textContent = `תגיות: ${product.tags.join(', ')}`;
  tags.className = 'tags';
  card.appendChild(tags)
}

 
  const button = document.createElement('button');
  button.textContent = 'הוסף לסל';
  button.className = 'add-to-cart';
  button.onclick = function () {
    alert(`${product.title} נוסף לסל`);
  };
  card.appendChild(button);

  return card;
}

function fetchData(type) {
  return fetch(`http://localhost:3000/${type}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      
    
      return response.json(); 
    })
    .then(data => {
      
      return data; 
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
}

  async function loadNotebookList() {
  
  const notebookList = document.getElementById('notebook-list');
  let  notebooks  = await fetchData("notebooks");
  console.log(notebooks);
  if (notebooks) {
    notebooks.forEach(n => {
      const productCard = createProductCard(n);
      notebookList.appendChild(productCard);
    });
  }
}

async function loadWritingList() {
  const writingList = document.getElementById('writing-list');
  let  craft  = await fetchData("craft");
  console.log(notebooks);
  if (craft) {
    craft.forEach(n => {
      const productCard = createProductCard(n);
      writingList.appendChild(productCard);
    });
  }

}


