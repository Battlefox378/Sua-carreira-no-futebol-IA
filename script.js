const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Escolha uma posição para iniciar sua carreira",
        alternativas: [
            {
                texto: "Goleiro",
                afirmacao: "Minha habilidade em proteger o gol sempre foi meu ponto forte."
            },
            {
                texto: "Atacante",
                afirmacao: "Prefiro o desafio de marcar gols e ser decisivo para o time."
            }
        ]
    },
    {
        enunciado: "Decida qual aspecto do jogo é mais importante para você",
        alternativas: [
            {
                texto: "Técnica refinada",
                afirmacao: "Sempre me destaquei pela precisão nos passes e na bola parada"
            },
            {
                texto: "Físico e velocidade",
                afirmacao: "Meu jogo é baseado na força física e na velocidade para superar os adversários."
            }
        ]
    },
    {
        enunciado: "Como você costuma reagir sob pressão durante os jogos decisivos",
        alternativas: [
            {
                texto: " Mantendo a calma e focando na estratégia",
                afirmacao: "A pressão me motiva a ser ainda mais concentrado."
            },
            {
                texto: "Usando a adrenalina como combustível",
                afirmacao: "Gosto da intensidade e energia que os momentos de pressão trazem."
            }
        ]
    },
    {
        enunciado: "Qual é o seu maior objetivo como jogador de futebol",
        alternativas: [
            {
                texto: "Vencer títulos importantes com o time",
                afirmacao: "Meu objetivo é levantar troféus e fazer história com meu clube."
            },
            {
                texto: "Ser reconhecido como um dos melhores jogadores do mundo",
                afirmacao: "Quero ser lembrado como uma lenda do esporte."
            }
        ]
    },
    {
        enunciado: "Como você equilibra sua vida pessoal com a carreira no futebol",
        alternativas: [
            {
                texto: "Mantendo uma vida equilibrada",
                afirmacao: "Valorizo minha família e amigos tanto quanto minha carreira no campo."
            },
            {
                texto: "Focando exclusivamente no futebol",
                afirmacao: "Minha dedicação total ao esporte é o que me impulsiona todos os dias."
            }
        ]
    },
];




let atual = 0;
let perguntaAtual;
let historiaFinal = "";


function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}


function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}


function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}


function mostraResultado() {
    caixaPerguntas.textContent = "Apos as perguntas você deu a seguinte resposta pra o público ...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}


mostraPergunta();
