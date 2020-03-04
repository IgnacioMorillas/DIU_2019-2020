/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */
/*          [DIU] UX Toolkit               */
/*          ver 1.0, 2019                  */
/*******************************************/

/****  README:       */
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) {

		$scope.JourneyIndex = 0;

        $scope.Journeys = [
			{

                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/

				Id: 0,
				Name: "Manuel Molina Muñoz",
                Photo: "hombre1.jpeg",

                /*** PASO #1: INSPIRACION ***/
                goal1: "La profesora de ingles le ha recomendado para mejorar pronunciación y afinar el oido.",
                touch1: "Profesora(Conversación)",
                feel1: "2",
                con1: "Buscar una alternativa para mejorar lo ve como algo desconocido y novedoso y al principio lo ve con inseguridad.",
                ima1: "cartoon-speaking.png",

                /*** PASO #2: DECICION ***/
                goal2: "Busca en internet recomendaciones de la profesora y encuentra una varias página que le llama la atención. ",
                touch2: "ordenador",
                feel2: "3",
                con2: "Hay demasiada información sobre demasiadas páginas web y aplicaciones para movil y eso le extresa facilmente.",
                ima2: "cartoon-PCangry.png",

                /*** PASO #3: ACTUA ***/

                goal3: "Finalmente encuentra una página que le convence y que además vee que hay gente de su edad.",
                touch3: "Ordenador",
                feel3: "2",
                con3: "Observa que no hay en este momento en su ciudad ningún grupo para quedar y hablar en ingles",
                ima3: "cartoon-PChappy.png",

                /*** PASO #4: OBSERVA ***/

                goal4: "Observa que en la página web el mismo puede crear un grupo y que la gente puede unirse a el",
                touch4: "Ordenador",
                feel4: "4",
                con4: "El espera que desde el momento en el que ha creado el grupo en la página se una  bastante gente y sin embargo solo se unen dos personas ",
                ima4: "cartoon-PCtyping.png",

                 /*** PASO #5: ANALIZA ***/

                goal5: "Ve que existe la versión en aplicación y la usa para cuando vaya a esa 'reunión'. ",
                touch5: "móvil (aplicación)",
                feel5: "4",
                con5: "Le parece más intutiva la página web además de que la gente no se pone en acuerdo en el lugar de reunión.",
                ima5: "cartoon-phone.png",


                /*** PASO #6: CONCLUSION ***/

                goal6: "Consigue poner en acuerdo al grupo en el lugar acordado",
                touch6: "móvil (aplicación)",
                feel6: "5",
                con6: "A pesar de poner a todo el mundo en acuerdo,el llegará tarde",
                ima6: "cartoon-resting.png",

			},
			{
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/

				Id: 1,
				Name: "Noelia García Martín",
                Photo: "mujer1.jpeg",

				 /*** PASO #1: INSPIRACION ***/
                goal1: "Quiere que sus hijas aprendan más idiomas además de que ella puede aprovechar el mismo objetivo.",
                touch1: "Agenda",
                feel1: "2",
                con1: "No tiene tiempo de apuntarse a una academia y las que encuentra tiene un precio elevado.",
                ima1: "cartoon-thinking.png",

                /*** PASO #2: DECICION ***/
                goal2: "Le cuenta el problema a un compañero de trabajo y el recomienda que use muchas de las web que hay para idiomas ",
                touch2: "Conversación(compañero de trabajo).",
                feel2: "4",
                con2: "Se agobia al ver tantas página web dedicadas a los idiomas y que les muestra demasiada información.",
                ima2: "cartoon-PChard.png",

                /*** PASO #3: ACTUA ***/

                goal3: "Encuentra una página que le llama la atención y que puede ser la apropiada ",
                touch3: "Ordenador",
                feel3: "3",
                con3: "Piensa que está perdiendo el tiempo y que no tendrá tiempo para esto.",
                ima3: "cartoon-phoningangry.png",

                /*** PASO #4: OBSERVA ***/

                goal4: "A los dias vuelve a probar con la página y observa que se van a reunir en un bar cercano.",
                touch4: "Ordenador.",
                feel4: "4",
                con4: "Le preocupa que sus hijas no puedan ir a la reunión.",
                ima4: "cartoon-deciding.png",

                 /*** PASO #5: ANALIZA ***/

                goal5: "Las personas que forman el grupo le dicen que no hay problema con sus hijas y que pueden asistir ",
                touch5: "Ordenador.",
                feel5: "5",
                con5: "Se ve insegura al volver empezar a hablar otro idioma.",
                ima5: "cartoon-phone-sitting.png",


                /*** PASO #6: CONCLUSION ***/

                goal6: "Al final su jefe le cambia el turno en el ultimo momento y no puede asistir",
                touch6: "Ordenador.",
                feel6: "1",
                con6: "Tendrá que quedar otro dia para poder con al gente de la aplicación",
                ima6: "cartoon-speaking.png",



			}
		];

		$scope.model = $scope.Journeys[0];

	}])
