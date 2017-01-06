var Doctor = require("./../js/doctor.js").doctorModule;

$(function() {
  function listDoctors(doctorArray) {
    console.log(doctorArray);
    var list = "";
    doctorArray.forEach(function(doctor) {
      var phone = doctor.practices[0].phones[0].number
      if(doctor.practices[0].phones.length == 2) {
        phone = doctor.practices[0].phones[1].number
      };
      list += ('<div class="col-md-4">' +
                '<div class="panel">' +
                  '<div class="panel-heading">' +
                    '<h3 class="panel-title">' + doctor.profile.first_name + " " + doctor.profile.last_name +
                    '</h3>' +
                  '</div>' +
                  '<div class = "panel-body">' +
                    '<img class="img-responsive" src="' +  doctor.profile.image_url + '">' +
                    '<p><strong>Specialties: </strong>' + doctor.specialties[0].name + '</p>' +
                    '<p><strong>Location: </strong>' + doctor.practices[0].visit_address.street + '</p>' +
                    '<p>' + doctor.practices[0].visit_address.city + '</p>' +
                    '<p>' + doctor.practices[0].visit_address.state_long+ '</p>' +
                    '<p><strong>Phone Number: </strong>' + phone + '</p>' +
                  '</div>' +
                '</div>' +
              '</div>'
              );
    });
    $('#doctorList').html(list);
  }
  $('#ailmentForm').submit(function(event) {
    event.preventDefault();
    ailment = $('#medicalIssue').val();
    var doc = new Doctor();
    doc.getDoctors(ailment, listDoctors);
  });
});
