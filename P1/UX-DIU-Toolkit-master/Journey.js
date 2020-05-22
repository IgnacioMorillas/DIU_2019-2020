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
				Name: "Noelia Garcia Martín",
                Photo: "mujer2.jpg",

                /*** PASO #1: INSPIRACION ***/
                goal1: "buscar un lugar donde poder trabajar fuera de casa",
                touch1: "Amigo",
                feel1: "3",
                con1: "No puede permitirse alquilar una oficina ya que no la va usar durante tanto tiempo, ni de forma cosntante.",
                ima1: "cartoon-speaking.png",

                /*** PASO #2: DECICION ***/
                goal2: "Encontrar alguna alternativa al alquiler de oficina. ",
                touch2: "ordenador",
                feel2: "3",
                con2: "Hay demasiada información sobre disntintas paginas, por lo que se decanta por la que le comento un amigo que el usaba.",
                ima2: "cartoon-PChard.png",

                /*** PASO #3: ACTUA ***/

                goal3: "usar su servicio.",
                touch3: "Ordenador",
                feel3: "4",
                con3: "Habla con el contacto de la web el cual procede a tomar sus datos y reservar su sitio.",
                ima3: "cartoon-PChappy.png",

                /*** PASO #4: OBSERVA ***/

                goal4: "Cambiarse de ciudad",
                touch4: "Ordenador",
                feel4: "4",
                con4: "Le surge irse a otra ciudad unos dias, por lo que consulta si puede ir a las oficinas de dicha ciudad",
                ima4: "cartoon-PCangry.png",

                 /*** PASO #5: ANALIZA ***/

                goal5: "Que le den plaza para dichos dias ",
                touch5: "Ordenador",
                feel5: "1",
                con5: "Tras hablar con los administradores les dice que solo puede ir a la oficina inicial y que si quiere ira  otra debe pagarla por separado.",
                ima5: "cartoon-phoneAssistan.jpg",


                /*** PASO #6: CONCLUSION ***/

                goal6: "Pagar",
                touch6: "Ordenador",
                feel6: "1",
                con6: "Accede a pagar ya que necesita seguir con su trabajo",
                ima6: "cartoon-PCangry.png",

			}
		];

		$scope.model = $scope.Journeys[0];

	}])
