const contact = document.getElementById('contact');
const items = document.getElementById('items');

contact.innerHTML = `<a href="${data.contact.url}"><span>${data.contact.text}</span></a>`;

items.innerHTML = data.items.map(function (item) {
  const link = item.url
    ? `<a href="${item.url}" class="more">SEE MORE</a>`
    : ``;
  return `<div class="item">

    <div class="block"></div>
    
    <div class="meta">
      <div class="category"><span>${item.category}</span></div>
      <div class="date"><span>${item.date}</span></div>
    </div>

    <div class="content">
      <h2 class="title">${item.title}</h2>
      <p class="summary">${item.summary}</p>
    </div>

    <div class="extra">
        ${link}
    </div> 
    
  </div>`;
}).join('');
