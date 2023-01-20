// Variáveis para manipulação do DOM.
let elementosForm = document.querySelectorAll("input");
let verifier = document.querySelector("#verificarGeral");
var form = document.querySelector("#myForm");

form.addEventListener("submit", (event) => {
  event.preventDefault(); //Evita que o formulário atualize automaticamente após submissão.
  validateForm();
});

const validateForm = () => {
  let valid = true;
  Array.from(elementosForm).some((element) => {
    if(element.value.length === 0){
      checkFields(null, element);
      verifier.style.visibility = "visible";
      verifier.innerHTML = "Campos obrigatórios não registrados.";
      valid = false;
    }
  })
    if(valid) success();
}

//Verifica os campos vazios
let checkFields = (event = null, element = null) => {
  const target = event? event.target : element; 
  if (target.value.trim().length === 0) fail(target);
  else cleanParagraph(target);
};

//Informa qual campo esta vazio e precisa preencher.
let fail = (element) => {
  var elementoP = element.parentNode.children[2];
  elementoP.innerHTML = "*Campo Obrigatório*";
  elementoP.style.visibility = "visible";
};

//Informa que o cadastro foi relizado com sucesso.
let success = () => {
  verifier.style.visibility = "visible";
  verifier.innerHTML = `<p class="success">Sucesso!</p>`;
  form.reset();
  reloadPage();
};

let cleanParagraph = (element) => {
  var elementP = element.parentNode.children[2];
  element.innerHTML = "";
  elementP.style.visibility = "hidden";
  verifier.style.visibility = "hidden";
  verifier.innerHTML = "";
};

//Recarrega a página em 3s após clicar no botao cadastrar.
reloadPage = () => {
  setTimeout(() => {
    window.location.reload();
  }, 3000);
};