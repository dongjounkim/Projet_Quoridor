$(document).ready(function () {

	//Creation du quadrillage
	function creeunrectangle(classe) {
		let element = document.createElement('div');
		element.classList.add(classe);
		element.setAttribute("data-col", i);
		element.setAttribute("data-lig", j);
		document.querySelector("#quadrillage").appendChild(element);
	}

	for (j = 0; j < 9; j++) {
		for (i = 0; i < 9; i++) {
			creeunrectangle('carre');
			creeunrectangle('murver');
		}
		for (i = 0; i < 9; i++) {
			creeunrectangle('murhor');
			creeunrectangle('petitcarre');
		}
	}

	//Supression des éléments en trop sur le quadrillage
	$(".murver[data-col= 8]").remove();
	$(".petitcarre[data-col= 8]").remove();
	$(".murhor[data-lig= 8]").remove();
	$(".petitcarre[data-lig= 8]").remove();

	//Pion placés dès l'initialisation
	$(".carre[data-col= 4][data-lig= 8]").append("<div class='pion1'></div>");
	$(".carre[data-col= 4][data-lig= 0]").append("<div class='pion2'></div>");

	//Fonctionalité de changement de joueur
	var player_number = 0;

	$('#quadrillage').on('click', '.carre', function (event) {
		// Swap current player
		if (player_number === 0) {
			$(".pion1").remove();
			$(this).append("<div class='pion1'></div>");
			player_number = nextPlayer(player_number);
		} else if (player_number === 1) {
			$(".pion2").remove();
			$(this).append("<div class='pion2'></div>");
			player_number = nextPlayer(player_number);
		}
	});

	function nextPlayer(player_number) {
		if (player_number == 0) {
			return player_number = 1;
		} else {
			return player_number = 0;
		}
	}
	
	const joueur = player_number + 1
    $('div.carre').before(function () {

        if ($(this).data('col') == $('.pion' + joueur).parent().data('col') + 1 && $(this).data('lig') == $('.pion' + joueur).parent().data('lig')) {

			$(this).addClass('carreho')
			console.log("case droite").click(removeClas('carreho'))

        } else if ($(this).data('col') == $('.pion' + joueur).parent().data('col') - 1 && $(this).data('lig') == $('.pion' + joueur).parent().data('lig')) {

			$(this).addClass('carreho')
            console.log("case gauche")

        } else if ($(this).data('col') == $('.pion' + joueur).parent().data('col') && $(this).data('lig') == $('.pion' + joueur).parent().data('lig') - 1) {

			$(this).addClass('carreho')
            console.log("case dessus")

        } else if ($(this).data('col') == $('.pion' + joueur).parent().data('col') && $(this).data('lig') == $('.pion' + joueur).parent().data('lig') + 1) {

			$(this).addClass('carreho')
            console.log("case dessous")

        } else {

            console.log("c pas un voisin ca")

        }
        console.log(player_number)
    })

});