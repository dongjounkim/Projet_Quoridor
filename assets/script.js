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


	//Pion placés dès l'initialisation
	$(".carre[data-col= 4][data-lig= 8]").append("<div class='pion1'></div>");
	$(".carre[data-col= 4][data-lig= 0]").append("<div class='pion2'></div>");

	//Fonctionalité de changement de joueur
	var player_number = 0;

	$('#quadrillage').on('click', '.carre', function (event) {
		// Swap current player
		if (player_number === 0) {
			$(".carre").on('click', function () {

				$(this).append("<div class='pion1'></div>");

			});
			$(".pion1").remove();
			player_number = nextPlayer(player_number);
			console.log(player_number, "First");
			console.log(this);
		} else if (player_number === 1) {
			$(".carre").on('click', function () {

				$(this).append("<div class='pion2'></div>");

			});
			$(".pion2").remove();
			player_number = nextPlayer(player_number);
			console.log(player_number, 'second');
			console.log(this);
		}
	});


	function nextPlayer(player_number) {
		if (player_number == 0) {
			return player_number = 1;
		} else {
			return player_number = 0;
		}
	}

	function getState(td) {
		if (td.hasClass('pion1') || td.hasClass('pion2')) {
			return 1;
		} else {
			return 0;
		}
	}

	// $(".carre[data-col= 4][data-lig= 0]").append("<div class='pion2'></div>");
	// $(".carre").on('click', function() {
	//   $(".pion2").remove();
	// 	$(this).append("<div class='pion2'></div>");
	// });
});