// faces.js
// ======
//

define('faces', [
  'jquery'
, 'underscore'
, 'text!../templates/face.html'
, 'text!../templates/details.html'
], function($, _, face_template, details_template) {

  var faces_target   // jQuery Object
    , details_target // jQuery Object
    , class_name   // String
    , callback     // Function
    , details = {}

  face_template = _.template(face_template)
  details_template = _.template(details_template)

  function load(params, _callback) {
    var url        = '/assets/json/members.json'
    faces_target   = $(params.faces_target)
    details_target = $(params.details_target)
    class_name     = params.class_name
    callback       = _callback

    $.ajax({
      type : 'GET'
    , url : url
    , async : false
    , contentType : 'application/json'
    , jsonpCallback : 'jsonpCallback'
    , success : gotUsers
    })
  }

  function gotUsers(data) {
    data = JSON.parse(data)
    _.each(data, function(user, position, users) {
      faces_target.append(face_template({
        user : user
      , class_name : class_name
      }))
      if (position === users.length - 1) {
        faces_target.on('hover', '.' + class_name, showDetails)
        if (callback) {
          callback()
        }
      }
    })
  }

  function showDetails() {
    var login = $(this).attr('data-login')
      ,  url
    if (details[login]) {
      details_target.html(details_template(details[login]))
    } else {
      url = '/assets/json/users/' + login + '.json'
      $.ajax({
        type : 'GET'
      , url : url
      , async : false
      , contentType : 'application/json'
      , jsonpCallback : 'jsonpCallback'
      , success : function(data) {
          details[login] = {
            user : JSON.parse(data)
          }
          details_target.html(details_template(details[login]))
        }
      })
    }
  }

  return {
    load : load
  }
})
