function verDados(){
    var soma = 0;
    const tabela = document.getElementById("info");
    const form = document.getElementById("formulario");
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const curso = document.getElementById("curso").value;
    
    var notas = [
        parseFloat(document.getElementById("nota1").value), 
        parseFloat(document.getElementById("nota2").value), 
        parseFloat(document.getElementById("nota3").value), 
        parseFloat(document.getElementById("nota4").value)
    ];

    notas.forEach((nota) => {
        soma += nota;
    });
    

    var media = soma/ notas.length;

    form.style.display = "none";

    tabela.innerHTML = `
    <tr class = "titulo">
        <th>Nome</th>
        <th>Idade</th>
        <th>Curso</th>
        <th>Média</th>
    </tr>

    <tr>
        <td>${nome}</td>
        <td>${idade}</td>
        <td>${curso}</td>
        <td>${media}</td>
    </tr>
    `

}