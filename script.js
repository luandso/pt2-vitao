const nameForm = document.getElementById('name-form');
const nameInput = document.getElementById('name-input');
const nameList = document.getElementById('name-list');

// Array para armazenar os nomes
let names = [];

// Função para renderizar a lista de nomes
function renderNames() {
  nameList.innerHTML = '';
  names.forEach((name, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${name}</span>
      <div class="actions">
        <span class="edit" onclick="editName(${index})">&#9998;</span>
        <span class="delete" onclick="deleteName(${index})">&#128465;</span>
      </div>
    `;
    nameList.appendChild(li);
  });
}

function addName(event) {
  event.preventDefault();
  const newName = nameInput.value.trim();
  if (newName !== '') {
    names.push(newName);
    renderNames();
    nameInput.value = '';
  }
}

// Função para editar um nome
function editName(index) {
  const newName = prompt('Digite o novo nome:', names[index]);
  if (newName !== null && newName.trim() !== '') {
    names[index] = newName.trim();
    renderNames();
  }
}

// Função para excluir um nome
function deleteName(index) {
  if (confirm('Tem certeza que deseja excluir este nome?')) {
    names.splice(index, 1);
    renderNames();
  }
}

nameForm.addEventListener('submit', addName);

renderNames();
