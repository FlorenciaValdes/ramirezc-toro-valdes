var trabajos = [{
    figure: "media/trabajo-01-gibones.png",
    alt: "Descripción de la imagen",
    title: "Enriquecimiento ambiental",
    about: "Sistema interactivo para fomentar las conductas silvestres de los gibones del zoológico metropolitano de Chile, basado en la observación de sus conductas regulares dentro del recinto y en su hábitat natural."
}, {
    figure: "media/trabajo-02-cling!.png",
    alt: "Descripción de la imagen",
    title: "Cling!",
    about: "Guante que facilita el lavado de loza y disminuye el tiempo de esta actividad. Proponiendo así cambiar los estigmas negativos de esta tarea."
}, {
    figure: "media/trabajo-03-nauca.png",
    alt: "Descripción de la imagen",
    title: "Nauca",
    about: "Nauca es un urinario femenino hecho de tela pvc, entregado por municipalidades de comunas afectadas por un terremoto, éstos vienen plegados, rodeados del packaging que incluye instrucciones de armado y uso."
}, {
    figure: "media/trabajo-04-dioro.png",
    alt: "Descripción de la imagen",
    title: "Di'Oro",
    about: "Di'Oro es un bocado a base de polenta con relleno de empanada de pino, propuesta que nace de la interculturalidad gastronómica que enfrenta hoy en día Chile."
}, {
    figure: "media/trabajo-05-tibiotibio.png",
    alt: "Descripción de la imagen",
    title: "Tibio-Tibio",
    about: "Juego infantil de yoga para desarrollar la motricidad gruesa de les niñes."
}, {
    figure: "media/trabajo-06-celer.png",
    alt: "Descripción de la imagen",
    title: "Celer",
    about: "Dispositivo electrónico que funciona con fotosensores, luz y señales sonoras transmitidas a audífonos conectados por Bluetooth. Busca brindarle autonomía a los atletas ciegos, haciéndoles saber cuando se acercan a las líneas de los carriles, permitiéndole volver al centro, evitando que se salgan de su pista."
}, {
    figure: "media/trabajo-07-movo.jpg",
    alt: "Descripción de la imagen",
    title: "Movo",
    about: "Estilo armband para runners que se puede poner en el brazo, muñeca, tobillo o pierna que tiene sensores para detectar cuando el cuerpo ha bajado su ritmo y su rendimiento durante una actividad física con la finalidad de poder traspasar una cantidad de electrolitos reutilizados de la sudoración eliminada, para poder aumentar su rendimiento y otorgarle beneficios."
}, {
  figure: "media/trabajo-08-elise.jpg",
  alt: "Descripción de la imagen",
  title: "Elise",
  about: "Wearable que vibra al ritmo de la música, permitiendo a personas sordas sentir la música y practicar deportes como la gimnasia rítmica."
}, {
  figure: "media/trabajo-09-50años.png",
  alt: "Descripción de la imagen",
  title: "Campaña 50 años Tostador Ilko",
  about: "Juego infantil de yoga para desarrollar la motricidad gruesa de les niñes. Contiene 1 set de cartas con distintas asanas de yoga simplificadas para que puedan realizarlas sin dificultad."
}];
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '" alt="' + trabajos[i].alt + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';
    $('#portafolio').append('<div class="item">' + uno + dos + tres + '</div>')
});
