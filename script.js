// Form
const dynamicForm1 = document.getElementById('dynamic-form-1');
const dynamicForm2 = document.getElementById('dynamic-form-2');
const dynamicForm3 = document.getElementById('dynamic-form-3');
const dynamicForm4 = document.getElementById('dynamic-form-4');
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
  dynamicForm2.innerHTML = '<button type="submit" class="btn">' +
    'Get all genres</button>';
};

document.querySelector('#readForm-options>label:nth-child(3)'
).onclick = function() {
  dynamicForm2.innerHTML = '';
  dynamicForm2.innerHTML = '<button type="submit" class="btn">' +
  'Get all storages</button>';
};

// Update forms
document.querySelector('#updateForm-options>label:nth-child(1)'
).onclick = function() {
  dynamicForm3.innerHTML = '';
  dynamicForm3.innerHTML = '<label>Bookinfo ID<input type="text"' +
  'name="BookinfoID" id="BookinfoID" pattern="[0-9]*" required></label>' +
  '<label>Title<input type="text"' +
  'name="Title" required></label>' +
  '<label>Publication Year<input type="text"' +
  'name="PublicationYear" id="number" pattern="[0-9]{4}" required></label>' +
  '<label>Author<input type="text"' +
  'name="Author" required></label>' +
  '<label>ISBN<input type="text"' +
  'name="ISBN" required></label>' +
  '<button type="submit" class="btn">Submit</button>';
};

document.querySelector('#updateForm-options>label:nth-child(2)'
).onclick = function() {
  dynamicForm3.innerHTML = '';
  dynamicForm3.innerHTML = '<label>Genre ID<input type="text"' +
  'name="BookinfoID" id="BookinfoID" pattern="[0-9]*" required></label>' +
  '<label>Genre name<input type="text"' +
  'name="Name" required></label>' +
  '<button type="submit" class="btn">Submit</button>';
};

document.querySelector('#updateForm-options>label:nth-child(3)'
).onclick = function() {
  dynamicForm3.innerHTML = '';
  dynamicForm3.innerHTML = '<label>Storage ID<input type="text"' +
  'name="BookinfoID" id="BookinfoID" pattern="[0-9]*" required></label>' +
  '<label>Storage name<input type="text"' +
  'name="Storage" required></label>' +
  '<label>Storage location<input type="text"' +
  'name="Location" required></label>' +
  '<button type="submit" class="btn">Submit</button>';
};

// Delete forms
document.querySelector('#deleteForm-options>label:nth-child(1)'
).onclick = function() {
  dynamicForm4.innerHTML = '';
  dynamicForm4.innerHTML = '<label>Book ID<input type="text"' +
    'name="id" pattern="[0-9]*" required></label>' +
    '<button type="submit" class="btn">Submit</button>';
};

document.querySelector('#deleteForm-options>label:nth-child(2)'
).onclick = function() {
  dynamicForm4.innerHTML = '';
  dynamicForm4.innerHTML = '<label>Genre ID<input type="text"' +
    'name="id" pattern="[0-9]*" required></label>' +
    '<button type="submit" class="btn">Submit</button>';
};

document.querySelector('#deleteForm-options>label:nth-child(3)'
).onclick = function() {
  dynamicForm4.innerHTML = '';
  dynamicForm4.innerHTML = '<label>Storage ID<input type="text"' +
    'name="id" pattern="[0-9]*" required></label>' +
    '<button type="submit" class="btn">Submit</button>';
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
    } else if (xmlhttp.readyState == 4 && xmlhttp.status == 400) {
      alert('FAIL');
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
        url += elements[i].name + '=' + parseInt(elements[i].value) + '&';
      } else {
        json[elements[i].name] = elements[i].value;
        url += elements[i].name + '=' + elements[i].value + '&';
      }
    }
  }
  console.log(url);
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.open('GET', url, true);
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      results = JSON.parse(xmlhttp.responseText);
      console.log(results);
      let html = '<table><tr>';
      const keys = Object.keys(results[0]);
      for (let i = 0; i < keys.length; i++) {
        html += '<th>'+ keys[i] +'</th>';
      }
      html += '</tr><tr>';
      for (let i = 0; i < results.length; i++) {
        for (const key in results[0]) {
          if (results[i].hasOwnProperty(key)) {
            const value = results[i][key];
            html += '<td>' + value + '</td>';
          }
        }
        html += '</tr><tr>';
      }
      html += '</tr></table>';
      dynamicResult.innerHTML = html;
    } else if (xmlhttp.readyState == 4 && xmlhttp.status == 404) {
      results = JSON.parse(xmlhttp.responseText);
      alert('No results');
      console.log(results);
    }
  };
  xmlhttp.send();
  event.preventDefault();
}

/**
 * Processes update form
 * @param {*} event
 */
function processUpdateForm(event) {
  const json = {};
  const item = document.querySelectorAll(
      '#updateForm-options > label > input[name=item]:checked')[0].value;
  console.log(item);
  const elements = document.querySelectorAll(
      '#dynamic-form-3 > label > input[type=text]');
  let id = 0;
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].id == 'BookinfoID') {
      id = parseInt(elements[i].value);
    } else {
      if (elements[i].id == 'number') {
        json[elements[i].name] = parseInt(elements[i].value);
      } else {
        json[elements[i].name] = elements[i].value;
      }
    }
  }
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.open('PUT', 'http://localhost:8081/api/v1/' + item + '/' + id, true);
  xmlhttp.setRequestHeader('Content-type', 'application/json');
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      alert('SUCCESS');
    } else if (xmlhttp.readyState == 4 && xmlhttp.status == 404) {
      alert('FAIL');
    }
  };
  const data = JSON.stringify(json);
  console.log(data);
  xmlhttp.send(data);
  event.preventDefault();
}

/**
 * Processes delete form
 * @param {*} event
 */
function processDeleteForm(event) {
  const item = document.querySelectorAll(
      '#deleteForm-options > label > input[name=item]:checked')[0].value;
  console.log(item);
  const elements = document.querySelectorAll(
      '#dynamic-form-4 > label > input[type=text]');
  const id = elements[0].value;
  console.log(id);
  event.preventDefault();
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.open('DELETE', 'http://localhost:8081/api/v1/' + item + '/' + id, true);
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      alert('SUCCESS');
    } else if (xmlhttp.readyState == 4 && xmlhttp.status == 404) {
      alert('FAIL');
    }
  };
  xmlhttp.send();
  event.preventDefault();
}

/**
 * Init
 */
function init() {
  document.getElementById('createForm').onsubmit = processCreateForm;
  document.getElementById('readForm').onsubmit = processReadForm;
  document.getElementById('updateForm').onsubmit = processUpdateForm;
  document.getElementById('deleteForm').onsubmit = processDeleteForm;
};

window.onload = init;
