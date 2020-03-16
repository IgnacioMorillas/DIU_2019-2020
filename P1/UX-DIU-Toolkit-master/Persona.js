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
				Photo: "NIÑO1.jpeg",
				Quote: "Cuando las circunstancias cambian, yo cambio de opinión",
				Age: 21,
				Occupation: "Parado de larga duración",
				Family: "Vivo con los padres y mi hermana, actualmente sin pareja",
				Location: "Asturias - Cadiar",
				Character: "Dejao, trabajador, simpatico, extrovertido, risueño, con poca paciencia, apasionado de la música",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 5 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 2 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 5 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 1 }
				],
				Goals: ["independencia economica", "Independizarme.", "Formar una familia.", "Encontrar un trabajo estable.", "Aprender a tocar la guitarra.", "Dejar de fumar.", "Visitar Berlín."],
				Frustrations: ["No me gusta el echo de estar con mis padres viviendo.", "Depender economicamente de mis padres.", "No haber acabado el módulo de Salud Ambiental.", "Me echarón de mis ultimos trabajos por no tener vehiculo para acudir y llegar tarde.", "No pude ir al concierto de mi grupo favorito."],
				Bio: "Nací en un pequeño pueblo de Asturias en el cual viví hasta la edad de 14 años. A la edad de 11 años tuve que dejar los estudiós para trabajar para ayudar economicamente a la familia. Trabajé en una carpintería y echando jornales en el campo. A los 14 me mudé a Cartagena a trabajar en el bar de mi Tia. Allí estuve hasta que cumplí los 16 que lo dejé y me fui a la construcción. A los 18 me saque el graduado escolar y a los 19 volví a Asturías a cursar un modulo. Cursé un año pero debido a cuestiones economicas lo dejé y volví a trabajr, estuve 1 mes y me echarón. Ahora mismo vivo con mis padrés manteniendonos con la pensión de mi padre",
				Tech: [
					{ Name: "TIC/Internet", Value: 2 },
					{ Name: "Movil", Value: 4 },
					{ Name: "RRSS", Value: 4 },
					{ Name: "Software", Value: 1 }

				],
                Contextos: "Está pensanso ir a Holanda a trabajar para ganarse un dinero, pero se le da mal los idiomas y es imprescindible para poder irse allí.",
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 1 },
					{ Name: "Online & Social Media", Value: 4 },
					{ Name: "Recomendaciones & sugerencias", Value: 4 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 5 }
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
				Family: "Divorciada y con dos hijas de 15 y 9 años",
				Location: "Valencia",
				Character: "Alegre, Optimista, Trabajadora, Atenta, Inquieta, y Poco paciente, Indecisa.",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 2 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 3 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 3 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 4 }
				],
				Goals: ["Ascender en su trabajo.", "Abrir su propia veterinaria.", "Mudarse cerca de la playa.", "Aprender a bailar.", "Un grupo de amistad."],
				Frustrations: ["No tener tiempo para mi misma.", "No tener muchas amistades.", "Que no la valoren en el trabajo.", "Su hija mayor no quiere seguir sus pasos y estudiar veterinaria.", "Sus hijas quieren irse a vivir con el padre."],
				Bio: "Siempre he vivido en Valencia, donde estudié. Repetí 2 veces en bachillerato por lo que cuando llegue a la politecnica a estudiar era la mayor, por loq ue me ha dificultado a la hora de hacer amistades. Durante este periodo conoci a mi exmarido. 5 años despues me quedé embarazada de mi primera hija por lo que el dinero que tuve ahorrado para abrir mi clínica se vio esfumado por la boda y la mudanza a una casa mas grande. Todo fue bien hasta 6 años despues que nació mi segunda hija. Tras un año del nacimiento dejé a mis hijas solas con mi exmarido, por que me surguio un trabajo bien pagado en barcelona por lo que me decidí irme para ahorrar para abrir mi clínica. Esta separación durante tanto tiempo acabó derivando al divorcio.",
				Tech: [
					{ Name: "TIC/Internet", Value: 2 },
					{ Name: "Mobile", Value: 2 },
					{ Name: "RRSS", Value: 3 },
					{ Name: "Software", Value: 1 }

				],
                Contextos:   "Le ha surgido una nueva oferta de trabajo bastante tentadora, con la cual podría en unos años abrir su propio negocio, por lo que necesita mejorar su idioma para comunicarse con los extranjeros de la zona." ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 4 },
					{ Name: "Online & Social Media", Value: 4 },
					{ Name: "Recomendaciones & sugerencias", Value: 2 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 4 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])
