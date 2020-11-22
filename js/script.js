$(document).ready(function() {

  var baseDate = moment({
      day : 1,
      month: 0,
      year: 2018
  });

  // evento click su prev
  $('#prev').click(function() {
      // quando clicco prendo questo dato...
      var dataCurrentMonth = $('h3').attr('data-current-month');
      // ... e lo trasformo in un oggetto moment
      var dataMonthMoment = moment(dataCurrentMonth);
      // ci sommo un mese e lo aggiungo alla funzione getMonth per ottenere
      // ... il mese successivo
      var mesePrecendente = dataMonthMoment.subtract(1, 'months');
      // chiamo la funzione per scorrere i mesi e la funzione per evidenziare le festività
      getMonth(mesePrecendente);
      getHoliday(mesePrecendente);
  });

  // evento click su next
  $('#next').click(function() {
      // quando clicco prendo questo dato...
      var dataCurrentMonth = $('h3').attr('data-current-month');
      // ... e lo trasformo in un oggetto moment
      var dataMonthMoment = moment(dataCurrentMonth);
      // ci sommo un mese e lo aggiungo alla funzione getMonth per ottenere
      // ... il mese successivo
      var meseSuccessivo = dataMonthMoment.add(1, 'months');
      // chiamo la funzione per scorrere i mesi e la funzione per evidenziare le festività
      getMonth(meseSuccessivo);
      getHoliday(meseSuccessivo);
  });

  getMonth(baseDate);
  getHoliday(baseDate);
}); // end document ready

// funzione che riceve un oggetto moment e stampa il mese
function getMonth(baseDate) {

  if(baseDate.year() === 2018) {

  // ripristino a zero il mese, altrimenti mi appenderà le stringhe invece che sostituire tutto
  $('#ul').html('');

  var mese = baseDate.format('MMMM YYYY');
  // scrivo il mese nell'h3 con text...
  $('h3').text(mese);
  // ... e salvo il mese in un attributo in un formato che mi sarà comodo successivamente
  $('h3').attr('data-current-month', baseDate.format('YYYY-MM-DD'));

  // faccio un ciclo for per stampare i giorni del mese
  // prima uso la funzione days in month per avere sempre il numero giusto di 
  // giorni da ciclare
  var numeroGiorniInMese = baseDate.daysInMonth();
  var source = $("#template").html();
  var template = Handlebars.compile(source);

  for(var i=1; i <= numeroGiorniInMese; i++) {

      // reimposto un oggetto moment iniziale per poterlo iterare 
      // modificando il giorno e passandolo in un oggetto in modo
      // da stamparlo con handlebars
      // setup Handlebars
      
      var giornoIniziale = moment({
              day: i,
              month: baseDate.month(),
              year: baseDate.year()
          });
      
      var context = {
              day : giornoIniziale.format('D MMMM'),
              // passo a tutti gli <li> un attributo
              data : giornoIniziale.format('YYYY-MM-DD')
          }
      // console.log(context);
      var html = template(context);
      // console.log(html);
      $('#ul').append(html);
  }      
  } else {
      alert('non ci sono dati disponibili per la data selezionata!');
  }  
}

// funzione che trova la festività e colora di rosso l'li
// ed appende la festività, nel calendario

function getHoliday(baseDate) {

  $.ajax({
      url : 'https://flynn.boolean.careers/exercises/api/holidays',
      method : 'GET',
      data : {
          month : baseDate.month(),
          year : baseDate.year()
      },
      // successo chiamata ajax
      success : function(getArrayData) {

          var data = getArrayData.response

          for(var i=0; i < data.length; i++) {
              var singleData = data[i];
              // trovo le festività  
              var holidayName = singleData.name;
              var holidayDate = singleData.date;
              
              // faccio un ciclo su tutti gli li con classe day
              $('.day').each(function() {
              // se trovo un li con attributo uguale a holidayDate...scrivo nella console ok
              var daTrovare = $(this).attr('data');

              if(daTrovare === holidayDate) {
                  $(this).addClass('holiday');
                  $(this).append(' - ' + holidayName);
              }
          });
          }   
      },

      // errore chiamata ajax
      error : function() {
          alert('qualcosa non va!')
      }
  })
}



