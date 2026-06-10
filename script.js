const soloSelect = document.getElementById("soloSelect");
const resultadoSolo = document.getElementById("resultadoSolo");

const solos = {
    arenoso: {
        nome: "Solo Arenoso",
        descricao: "Possui grãos maiores, boa drenagem e baixa retenção de água."
    },

    argiloso: {
        nome: "Solo Argiloso",
        descricao: "Retém água e nutrientes com facilidade."
    },

    humoso: {
        nome: "Solo Humoso",
        descricao: "Muito fértil e rico em matéria orgânica."
    },

    calcario: {
        nome: "Solo Calcário",
        descricao: "Rico em cálcio e utilizado para corrigir a acidez do solo."
    }
};

soloSelect.addEventListener("change", () => {

    const valor = soloSelect.value;

    if(!valor){
        resultadoSolo.innerHTML = `
            <h3>Informações do Solo</h3>
            <p>Selecione um solo acima.</p>
        `;
        return;
    }

    resultadoSolo.innerHTML = `
        <h3>${solos[valor].nome}</h3>
        <p>${solos[valor].descricao}</p>
    `;
});

function verificarQuiz(resposta){

    const resultado =
    document.getElementById("resultadoQuiz");

    if(resposta === "humoso"){
        resultado.innerHTML =
        "✅ Correto! O solo humoso é o mais rico em matéria orgânica.";
    }
    else{
        resultado.innerHTML =
        "❌ Resposta incorreta. Tente novamente.";
    }
}
