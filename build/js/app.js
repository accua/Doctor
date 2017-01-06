(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "ce253951c9ed56a533788b9d229c92a9";	

},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

function Doctor() {
}

Doctor.prototype.getDoctors = function(medicalIssue, listDoctors) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(response) {
     listDoctors(response.data)
    })
   .fail(function(error) {
      console.log("fail");
    });
};


exports.doctorModule = Doctor;

},{"./../.env":1}],3:[function(require,module,exports){
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

},{"./../js/doctor.js":2}]},{},[3]);
