const contact = document.getElementById('contact');
const items = document.getElementById('items');

contact.innerHTML = `<a href="${data.contact.url}"><span>${data.contact.text}</span></a>`;

items.innerHTML = data.items.map(function (item) {
  const title = item.url
    ? `<h2 class="title"><a href="${item.url}">${item.title}</a></h2>`
    : `<h2 class="title">${item.title}</h2>`;
  return `<div class="item">

    <div class="block"></div>
    
    <div class="meta">
      <div class="category"><span>${item.category}</span></div>
      <div class="date"><span>${item.date}</span></div>
    </div>

    <div class="content">
      ${title}
      <p class="summary">${item.summary}</p>
    </div>
    
  </div>`;
}).join('');
