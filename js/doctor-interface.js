var Doctor = require("./../js/doctor.js")

$(function() {
  function listDoctors(docArray) {
    var list = '';
    docArray.forEach(function(bike) {
      list += ('<div class="col-md-4">' +
               '<div class="panel">' +
                 '<div class="panel-heading">' +
                   '<h3 class="panel-title">' + bike.manufacturer_name + '</h3>' +
                   '<p>' + date.toLocaleString() + '</p>' +
                 '</div>' +
                 '<div class = "panel-body">' +
                   '<img class="img-responsive" src="' + thumb + '">' +
                   '<p><strong>Model: </strong>' + bike.frame_model + '</p>' +
                   '<p><strong>Color: </strong>' + bike.frame_colors[0] + '</p>' +
                   '<p><strong>Location: </strong>' + bike.stolen_location + '</p>' +
                 '</div>' +
               '</div>' +
             '</div>'
             );
    })
  }
})
