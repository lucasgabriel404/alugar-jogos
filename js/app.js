function alterarStatus(opcao){
        let jogo = document.getElementById(`game-${opcao}`);

        if(jogo.querySelector("a").classList.contains("dashboard__item__button--return")){
            jogo.querySelector("div").classList.remove("dashboard__item__img--rented");
            jogo.querySelector("a").classList.remove("dashboard__item__button--return");
            jogo.querySelector("a").textContent = "Alugar";

        }else{
            jogo.querySelector("div").classList.add("dashboard__item__img--rented");
            jogo.querySelector("a").classList.add("dashboard__item__button--return");
            jogo.querySelector("a").textContent = "Devolver";
        }
}