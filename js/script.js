// Creare un calendario dinamico con le festività. Partiamo dal gennaio 2018 dando la possibilità di cambiare mese, 
// gestendo il caso in cui l’API non possa ritornare festività. 
// Il calendario partirà da gennaio 2018 e si concluderà a dicembre 2018 (unici dati disponibili sull’API).

// Sarà indispensabile sia per la parte obbligatoria, che per quella facoltativa, 
// l’utilizzo di momentjs e dell’API holiday https://flynn.boolean.careers/exercises/api/holidays?year=2018&month=0
// Link al documento con le specifiche: https://docs.google.com/document/d/1OcSGrT3Snh_DXrDZ82DVY59eqvzNb_Nh_Db5z3qq2_k/edit

// Consigli:
// 	1- Facciamo prima il mese di gennaio lasciandoci le parti opzionali per la fine
// 	2- Andiamo avanti passo passo, sfruttando la documentazione di momentjs per capire se e come momentjs può aiutarmi a risolvere un determinato problema.
// Analizzare inoltre, prima di scrivere codice, l’API delle festività
// Buon lavoro!



$(document).ready(function() {


  


  var gennaioArray = ['2018-01-01', '2018-01-02', '2018-01-03'];


  for (var i = 0; i < gennaioArray.length; i++) {

    var currentDay = gennaioArray[i];


    console.log(currentDay);
  }

  // var day = moment('2018-01-01').format('dddd Do MMMM YYYY');

  var day = moment('2018-01-01');
  console.log(day);

  var day2 = day.add('2', 'days');

  console.log(day2);


});  


