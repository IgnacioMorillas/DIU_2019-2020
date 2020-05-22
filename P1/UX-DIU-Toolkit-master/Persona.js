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
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/


				Id: 1,
				Name: "Noelia García Martín",
				Photo: "mujer2.jpg",
				Quote: "No hay mal que por bien no venga",
				Age: 45,
				Occupation: " Abogada ",
				Family: "Divorciada y con una hijas de 15",
				Location: "Valencia",
				Character: "Alegre, Optimista, Trabajadora, Atenta, Inquieta, y Poco paciente, Indecisa.",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 2 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 3 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 3 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 4 }
				],
				Goals: ["Ascender en su trabajo.", "Abrir su propia Gestoria.", "Mudarse cerca de la playa.", "Aprender a bailar.", "Un grupo de amistad."],
				Frustrations: ["No tener tiempo para mi misma.", "No tener muchas amistades.", "Que no la valoren en el trabajo.", "Su hija mayor no quiere seguir sus pasos y estudiar veterinaria.", "Sus hijas quieren irse a vivir con el padre."],
				Bio: "Siempre he vivido en Valencia, donde estudié. Repetí 2 veces en bachillerato por lo que cuando llegue a la politecnica a estudiar era la mayor, por loq ue me ha dificultado a la hora de hacer amistades. Durante este periodo conoci a mi exmarido. 5 años despues me quedé embarazada de mi hija por lo que el dinero que tuve ahorrado para abrir mi gestoria se vio esfumado por la boda y la mudanza a una casa mas grande. Tras unos año del nacimiento dejé a mi hija solas con mi exmarido, por que me surguio un trabajo bien pagado en barcelona por lo que me decidí irme para ahorrar para abrir mi gestoría. Esta separación durante tanto tiempo acabó derivando al divorcio, tengo la custodia de mi unica hija.",
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
