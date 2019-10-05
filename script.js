// Form
const dynamicForm1 = document.getElementById('dynamic-form-1');
const dynamicForm2 = document.getElementById('dynamic-form-2');
const dynamicResult = document.getElementById('dynamic-result-2');

// View change
document.querySelector('ul > li:nth-child(1)').onclick = function() {
  document.getElementById('create-page').style.display = 'block';
  document.getElementById('read-page').style.display = 'none';
  document.getElementById('update-page').style.display = 'none';
  document.getElementById('delete-page').style.display = 'none';
};

document.querySelector('ul > li:nth-child(2)').onclick = function() {
  document.getElementById('create-page').style.display = 'none';
  document.getElementById('read-page').style.display = 'block';
  document.getElementById('update-page').style.display = 'none';
  document.getElementById('delete-page').style.display = 'none';
};

document.querySelector('ul > li:nth-child(3)').onclick = function() {
  document.getElementById('create-page').style.display = 'none';
  document.getElementById('read-page').style.display = 'none';
  document.getElementById('update-page').style.display = 'block';
  document.getElementById('delete-page').style.display = 'none';
};

document.querySelector('ul > li:nth-child(4)').onclick = function() {
  document.getElementById('create-page').style.display = 'none';
  document.getElementById('read-page').style.display = 'none';
  document.getElementById('update-page').style.display = 'none';
  document.getElementById('delete-page').style.display = 'block';
};

// Create forms
document.querySelector('#createForm-options>label:nth-child(1)'
).onclick = function() {
  dynamicForm1.innerHTML = '';
  dynamicForm1.innerHTML = '<label>Title<input type="text"' +
    'name="Title" required></label>' +
    '<label>Publication Year<input type="text"' +
    'name="PublicationYear" id="number" pattern="[0-9]{4}" required></label>' +
    '<label>Author<input type="text"' +
    'name="Author" required></label>' +
    '<label>ISBN<input type="text"' +
    'name="ISBN" required></label>' +
    '<label>Storage ID<input type="text"' +
    'name="StorageID" id="number" pattern="[0-9]*" required></label>' +
    '<label>Genre ID<input type="text"' +
    'name="GenreID" id="number" pattern="[0-9]*" required></label>' +
    '<button type="submit" class="btn">Submit</button>';
};

document.querySelector('#createForm-options>label:nth-child(2)'
).onclick = function() {
  dynamicForm1.innerHTML = '';
  dynamicForm1.innerHTML = '<label>Genre name<input type="text"' +
    'name="Name" required></label>' +
    '<button type="submit" class="btn">Submit</button>';
};

document.querySelector('#createForm-options>label:nth-child(3)'
).onclick = function() {
  dynamicForm1.innerHTML = '';
  dynamicForm1.innerHTML = '<label>Storage name<input type="text"' +
    'name="Storage" required></label>' +
    '<label>Storage location<input type="text"' +
    'name="Location" required></label>' +
    '<button type="submit" class="btn">Submit</button>';
};

// Read forms
document.querySelector('#readForm-options>label:nth-child(1)'
).onclick = function() {
  dynamicForm2.innerHTML = '';
  dynamicForm2.innerHTML = '<label>Title<input type="text"' +
  'name="title"></label>' +
  '<label>Min Year<input type="text"' +
  'name="yearMin" id="number" pattern="[0-9]{4}"></label>' +
  '<label>Max Year<input type="text"' +
  'name="yearMax" id="number" pattern="[0-9]{4}"></label>' +
  '<label>Author<input type="text"' +
  'name="author"></label>' +
  '<label>ISBN<input type="text"' +
  'name="isbn"></label>' +
  '<label>Genre<input type="text"' +
  'name="genre"></label>' +
  '<label>Storage ID<input type="text"' +
  'name="storageID" id="number" pattern="[0-9]*"></label>' +
  '<button type="submit" class="btn">Submit</button>';
};

document.querySelector('#readForm-options>label:nth-child(2)'
).onclick = function() {
  dynamicForm2.innerHTML = '';
  dynamicForm2.innerHTML = 'test2';
};

document.querySelector('#readForm-options>label:nth-child(3)'
).onclick = function() {
  dynamicForm2.innerHTML = '';
  dynamicForm2.innerHTML = 'test3';
};

/**
 * Processes create form
 * @param {*} event
 */
function processCreateForm(event) {
  const json = {};
  const item = document.querySelectorAll(
      '#createForm-options > label > input[name=item]:checked')[0].value;
  console.log(item);
  const elements = document.querySelectorAll(
      '#dynamic-form-1 > label > input[type=text]');
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].id == 'number') {
      json[elements[i].name] = parseInt(elements[i].value);
    } else {
      json[elements[i].name] = elements[i].value;
    }
  }
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.open('POST', 'http://localhost:8081/api/v1/' + item, true);
  xmlhttp.setRequestHeader('Content-type', 'application/json');
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      alert('SUCCESS');
    }
  };
  const data = JSON.stringify(json);
  console.log(data);
  xmlhttp.send(data);
  event.preventDefault();
}

/**
 * Processes read form
 * @param {*} event
 */
function processReadForm(event) {
  dynamicResult.innerHTML = '';

  const json = {};
  const item = document.querySelectorAll(
      '#readForm-options > label > input[name=item]:checked')[0].value;
  console.log(item);
  const elements = document.querySelectorAll(
      '#dynamic-form-2 > label > input[type=text]');
  let results;
  let url = 'http://localhost:8081/api/v1/' + item + '?';

  for (let i = 0; i < elements.length; i++) {
    if (elements[i].value !== '') {
      if (elements[i].id == 'number') {
        json[elements[i].name] = parseInt(elements[i].value);
        url += elements[i].name + '=' + parseInt(elements[i].value);
      } else {
        json[elements[i].name] = elements[i].value;
        url += elements[i].name + '=' + elements[i].value;
      }
      if (i < elements.length-1) {
        url += '&';
      }
    }
  }
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.open('GET', url, true);
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      results = JSON.parse(xmlhttp.responseText);
      console.log(results);
    } else if (xmlhttp.readyState == 4 && xmlhttp.status == 404) {
      results = JSON.parse(xmlhttp.responseText);
      console.log(results);
    }
  };
  xmlhttp.send();
  dynamicResult.innerHTML = 'test';
  event.preventDefault();
}

/**
 * Init
 */
function init() {
  document.getElementById('createForm').onsubmit = processCreateForm;
  document.getElementById('readForm').onsubmit = processReadForm;
};

window.onload = init;
