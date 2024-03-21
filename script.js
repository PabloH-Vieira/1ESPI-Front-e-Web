let nome;
console.log(nome);
let disciplina = null;
console.log(disciplina);
//Exibindo no console
let aluno = "FIAP";
console.log(aluno);

//Int para Float
let idade = 20;
console.log(parseFloat(idade));

//Convertendo para String
let num1 = 30.584;
console.log(num1.toString());

//Saber o numero da variavel
let num = 123.456;
let numx = num.toString();
let verificar = typeof numx;
console.log(verificar);

//Manipulaçcao com metodos

//indexOf() - Mostra a posição de um trecho na String
let texto = "Isso é um texto";
console.log(texto.indexOf("é"))
console.log(texto[5])

//lastindexOf() - Faz a contagem do último
let texto2 = "Textos são compostos por palavras";
console.log(texto2.lastIndexOf("por"))

//slice() - Mostra o recorte de um texto, com o início e fim dos caracteres 
let texto3 = "Textos passam ideias";
console.log(texto3.slice(texto3.indexOf("pa"), texto.indexOf("ia"))) //Usando uma função dentro da outra

// length - Mostra quantos caracteres tem a string
let texto4 = "Ideias transformam o mundo"
console.log(texto4.length)
alert(texto4.length)
document.write(texto4.length)