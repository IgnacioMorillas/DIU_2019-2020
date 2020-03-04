/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */
/*          [DIU] UX Toolkit               */
/*          ver 1.0, 2019                  */
/*******************************************/

/****  README:       */
/****  Modifica los datos para las Personas      */
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) {

		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{

                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/


				Id: 0,
				Name: " Manuel Molina Muñoz ",
				Photo: "hombre1.jpeg",
				Quote: "Salir de la ciudad y ver mundo",
				Age: 50,
				Occupation: "Profesor de matemáticas y física",
				Family: "Con pareja desde hace 25 años",
				Location: "Madrid (Vallecas)",
				Character: "Le gusta disfrutar de la ciencia e iniciarse en las nuevas tecnologias.",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 5 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 3 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 1 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 4 }
				],
				Goals: ["Disfrutar de un buen libro"," Ir a la playa con su familia.", "Viajar para conocer otras culturas."],
				Frustrations: ["Me gusta aprender pero sino no llega a entender y comprender como funciona todo siente que está frustado.", "Me gustaría tener más tiempo libre para poder seguir aprendiendo."],
				Bio: "Soy de Zaragoza pero estudié en Madrid y acabe quedandose allí por el trabajo y formé una familia, pero siempre he sentido que quería llegar más lejos. LLevo 20 años trabajando como profesor. Me siento realizado en el trabajo y me suelo llevar bien con todos mis compañeros de trabajo.",
				Tech: [
					{ Name: "TIC/Internet", Value: 3 },
					{ Name: "Movil", Value: 2 },
					{ Name: "RRSS", Value: 2 },
					{ Name: "Software", Value: 3 }

				],
                Contextos: "LLeva un tiempo preocupado porque ahora le exigen un idioma para poder seguir dando clase y quiere apuntarse a una academia de idiomas.Le gustaria hacer un viaje con su familia al norte de Europa.",
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 3 },
					{ Name: "Online & Social Media", Value: 4 },
					{ Name: "Recomendaciones & sugerencias", Value: 2 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 3 }
				]
			},
			{

                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/


				Id: 1,
				Name: "Noelia García Martín",
				Photo: "mujer1.jpeg",
				Quote: "Destaca en lo que te apasiona",
				Age: 45,
				Occupation: " Veterinaria ",
				Family: "Divorciada y con dos hijas",
				Location: "Valencia",
				Character: "Disfruta pasando tiempo con sus hijas y sus mascotas.",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 2 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 3 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 3 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 4 }
				],
				Goals: ["Vivir nuevas experiencias.", "Conocer gente que comparta sus gustos.", "Aprender idiomas.", "Cocinar como una profesional.", "No dejarme llevar por la timidez."],
				Frustrations: ["No tener tiempo para mi misma.", "Ver el cuarto de mis hijas desordenado.", "Ser tan timida con mis compañeros de trabajo.", "Hacer horas extra cuando ya tenía planes.", "Me cuesta bastante hablar y comprender los idiomas."],
				Bio: "Nací y crecí en Valencia y no lo cambiaría por nada.Tuve la suerte de estudiar veterinaria y actualmente estoy ejerciendo esta profesión.Tengo dos hijas preciosas.",
				Tech: [
					{ Name: "TIC/Internet", Value: 4 },
					{ Name: "Mobile", Value: 3 },
					{ Name: "RRSS", Value: 3 },
					{ Name: "Software", Value: 3 }

				],
                Contextos:   "Ve la necesidad de querer viajar más para poder mundo.Además ve que ese mundo está cambiando y necesita aprender un nuevo idioma para poder progresar en su carrera." ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 2 },
					{ Name: "Online & Social Media", Value: 4 },
					{ Name: "Recomendaciones & sugerencias", Value: 4 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 3 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])
