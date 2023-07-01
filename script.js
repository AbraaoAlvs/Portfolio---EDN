const headerText = document.getElementById('header-text');
const text = 'Bem-vindo à nossa equipe!';
let index = 0;

function showHeaderText() {
  headerText.innerText = text.slice(0, index);

  if (index < text.length) {
    index++;
    setTimeout(showHeaderText, 100);
  }
}

showHeaderText();
