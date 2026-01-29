function truncarMedia(valor, casas = 6) {
    let texto = valor.toString();

    if (texto.includes(".")) {
        let [inteiro, decimal] = texto.split(".");
        decimal = decimal.slice(0, casas);
        texto = decimal.length > 0 ? `${inteiro}.${decimal}` : inteiro;
    }

    // remove zeros finais
    texto = texto.replace(/\.?0+$/, "");

    // troca ponto por vírgula
    return texto.replace(".", ",");
}

function calcularMedias(atletas) {
    for (let i = 0; i < atletas.length; i++) {
        const atleta = atletas[i];

        const notasOrdenadas = atleta.notas.slice().sort((a, b) => a - b);
        const notasValidas = notasOrdenadas.slice(1, 4);

        let soma = 0;
        for (let j = 0; j < notasValidas.length; j++) {
            soma += notasValidas[j];
        }

        const media = soma / notasValidas.length;

        const notasExibicao = [
            notasOrdenadas[4],
            notasOrdenadas[3],
            notasOrdenadas[0],
            notasOrdenadas[1],
            notasOrdenadas[2]
        ];

        console.log(`Atleta: ${atleta.nome}`);
        console.log(`Notas Obtidas: ${notasExibicao.join(",")}`);
        console.log(`Média Válida: ${truncarMedia(media)}`);
        console.log("");
    }
}

// Entrada
const atletas = [
    {
        nome: "Cesar Abascal",
        notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
        nome: "Fernando Puntel",
        notas: [8, 10, 10, 7, 9.33]
    },
    {
        nome: "Daiane Jelinsky",
        notas: [7, 10, 9.5, 9.5, 8]
    },
    {
        nome: "Bruno Castro",
        notas: [10, 10, 10, 9, 9.5]
    }
];

calcularMedias(atletas);
