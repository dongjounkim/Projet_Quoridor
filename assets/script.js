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
	var player_number = 1;

	$('#quadrillage').on('click', '.carre', function (event) {
		// Swap current player
		if (player_number === 1) {
			$(".carre").on('click', function () {
				$(".pion1").remove();
				$(this).append("<div class='pion1'></div>");
			});
			player_number = 0;
			console.log(player_number, "First");
		} else {
			$(".carre").on('click', function () {
				$(".pion2").remove();
				$(this).append("<div class='pion2'></div>");
			});
			player_number = 1;
			console.log(player_number, 'second');
		}
	});

	
	// $(".carre[data-col= 4][data-lig= 0]").append("<div class='pion2'></div>");
	// $(".carre").on('click', function() {
	//   $(".pion2").remove();
	// 	$(this).append("<div class='pion2'></div>");
	// });
});