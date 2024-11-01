let tarefasLimpeza = [];

tarefasLimpeza.push("varrer a casa");
tarefasLimpeza.push("lavar a louça");
tarefasLimpeza.push("organizar o quarto");
tarefasLimpeza.push("passar pano no chão");

tarefasLimpeza.splice(2, 1); 

tarefasLimpeza[1] = "limpar banheiro"; 

console.log("Lista de tarefas de limpeza atualizada:");
console.log(tarefasLimpeza);

