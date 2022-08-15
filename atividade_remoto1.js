// inicio cadastro por data do evento
let DataAtual = new Date (2022,8,15)
console.log("inicio")


// campo de inserção da data do evento
let dataEvento = new Date (2022,9,10)
if (dataEvento > DataAtual) {console.log("ok, pode cadastrar")}
else {console.log("data do evento inválida")}


// processamento para próxima etapa após inserção da data do evento
console.log("processando")

//inicio cadastro por idade do participante
const IdadeDoParticipante = ["18"]

//campo de inserção da idade do participante
let CadastroIdade = 18
if (CadastroIdade < 18) {console.log("Cadastro não permitido, idade menor que 18 anos")}
else {console.log("Cadastro permitido")}

// processamento para próxima etapa após inserção da data do evento
console.log("processando")

//inicio do cadastro por número de participantes
const ListaDeParticipantes = ["100"]

//campo de verificação do número de participantes do evento
let CadastroParticipante = 99
if (CadastroParticipante < 100) {console.log("Cadastro permitido")}
else {console.log("Cadastro não permitido, limite de participantes excedido")}

//processo de finalização do cadastro
console.log("Inscrição realizada!")

