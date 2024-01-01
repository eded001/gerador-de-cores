// pego o parágrafo
const p = document.getElementsByTagName('p')[0];

// pego o botão
const button = document.getElementsByTagName('button')[0];
// adiciona uma função ao ser clicada
button.onclick = () => addColorInfos();

// adiciono a função quando a página for aberta
document.body.onload = () => addColorInfos();

// função de adicionar as informação das cores retornadas da função de criar a cor
function addColorInfos() {
    // variável global local
    colorPrincipal = createColor();

    p.innerText = // texto adicionado referente a cor retornada da função
    document.body.style.backgroundColor = // cor adicionada referente a cor retornada da função
    button.style.color = // cor adicionada referente a cor retornada da função
    colorPrincipal; // variável

    button.style.border = `3px solid ${colorPrincipal}80`; // cor da borda referente a cor retornada da função
}

// função de criar uma cor
function createColor() {
    colorHEXCodes = '0123456789ABCDEF'; // códigos hexadecimais
    color = '#'; // string com hashtag que vai ser adicionada os códigos hexadecimais

    for(let i = 0; i < 6; i++) color += colorHEXCodes[Math.floor(Math.random() * 16)]; // laço que vai adicionando os códigos hexadecimais

    console.info(`Cor gerada: ${color}`); // console que diz qual cor foi gerada

    return color; // retorna a cor gerada
}