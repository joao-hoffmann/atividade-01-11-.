let filmesFavoritos = ["A Origem", "O Senhor dos Anéis", "Matrix"];

filmesFavoritos[0] = "Interestelar";

if (filmesFavoritos[filmesFavoritos.length - 1] !== "Harry Potter") {
    filmesFavoritos.push("Harry Potter");
}

console.log(filmesFavoritos);
