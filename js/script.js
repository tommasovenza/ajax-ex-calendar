// Creare un calendario dinamico con le festività. 
// Partiamo dal gennaio 2018 dando la possibilità di cambiare mese, 
// gestendo il caso in cui l’API non possa ritornare festività. 
// Il calendario partirà da gennaio 2018 e si concluderà a dicembre 2018 
// (unici dati disponibili sull’API).

// Sarà indispensabile sia per la parte obbligatoria, che per quella facoltativa, 
// l’utilizzo di momentjs e 
// dell’API holiday https://flynn.boolean.careers/exercises/api/holidays?year=2018&month=0
// Link al documento con le specifiche: 
// https://docs.google.com/document/d/1OcSGrT3Snh_DXrDZ82DVY59eqvzNb_Nh_Db5z3qq2_k/edit

// Consigli:
// 	1- Facciamo prima il mese di gennaio lasciandoci le parti opzionali per la fine
// 	2- Andiamo avanti passo passo, sfruttando la documentazione di momentjs 
// per capire se e come momentjs può aiutarmi a risolvere un determinato problema.
// Analizzare inoltre, prima di scrivere codice, l’API delle festività
// Buon lavoro!

$(document).ready(function () {

  // // handlebars setup
  var source = $('#entry-template').html();

  // compilo il template che mi sono preso con handlebars
  var template = Handlebars.compile(source);

  // Oggetto che si chiama
  // parametri da passare alla funzione template compilata da handlebar per generare html
  // in questa variabile da passare poi alla funzione ci va sempre un oggetto.
  // per generare html con handlebars ci vuole sempre un oggetto!!!!

  // --> APPUNTI <-- var mese = moment('2018-01-01').daysInMonth();


  var giornoIniziale = moment('2018-01-01');

  var giorniMeseCorrente = giornoIniziale.daysInMonth();

  for (var counter = 0; counter < giorniMeseCorrente; counter++) {

    var giornoCorrente = moment(giornoIniziale);

    giornoIniziale.add(counter, 'days');

    var nomeGiornoDellaSettimana = giornoCorrente.format('dddd');
    var giornoNumeroMese = giornoCorrente.format('D');
    var dataCompleta = giornoCorrente.format('YYYY');

    // l'oggetto può avere le virgolette come no. il valore però deve avere sempre le virgolette
    var parametri = {
      date: giornoNumeroMese,
      name: nomeGiornoDellaSettimana,
      complete_date: dataCompleta
    };
  }
  // genera il template con i parametri passati
  var htmlGenerato = template(parametri);

  // lo metto nell'html
  $('.container').append(htmlGenerato);


});