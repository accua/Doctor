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
      list += ('<div class="col s10 offset-s1 m4 offset-s2 l4">' +
                '<div class="card">' +
                  '<div class="card-image waves-effect waves-block waves-light">' +
                    '<img class="activator" src="' + doctor.profile.image_url + '">' +
                  '</div>' +
                  '<div class="card-content">' +
                    '<span class="card-title activator grey-text text-darken-4">' + doctor.profile.first_name + " " + doctor.profile.last_name + '<i class="material-icons right">more_vert</i></span>' +
                  '</div>' +
                  '<div class="card-reveal">' +
                    '<span class="card-title grey-text text-darken-4">' + doctor.specialties[0].name +'<i class="material-icons right">close</i></span>' +
                    '<p><strong>Location:<br> </strong>' + doctor.practices[0].visit_address.street + '<br>' +
                    doctor.practices[0].visit_address.city + '<br>' +
                    doctor.practices[0].visit_address.state_long + '</p>' +
                    '<p><strong>Phone Number: </strong>' + phone + '<br>' +
                  '</div>' +
                '</div>' +
              '</div>'
    );
  });
  $('#doctorList').html(list);
};
  $('#ailmentForm').submit(function(event) {
    event.preventDefault();
    ailment = $('#medicalIssue').val();
    var doc = new Doctor();
    doc.getDoctors(ailment, listDoctors);
  });
});
