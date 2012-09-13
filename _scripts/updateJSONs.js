// updateJSONs.js
//
// For some reason the http request
// on the public website of OpenVE
// (at http://openve.github.com/)
// was not loading the JSONs files
// when requested, not even with
// JSONP.
//
// The solution is to cache those
// requests on the server inside
// our domain.
//
// This script will get all
// our community members and
// their information so they
// can be accesible in
// /json/members.json
// /json/users/user.json
//
// Ussage:
//
//   node updateJSONs.js
//
// by Daniel Rodríguez
// for OpenVE
//


var fs    = require('fs')
  , https = require('https')


// Simple wrapper for all the errors.
function throwError(e) {
  if (!e) {
    return
  }
  throw e
}


// Make the requests to the user's API
function requestUser(login, callback) {
  console.log('Requesting User: ' + login)
  var options = {
      host   : 'api.github.com'
    , port   : 443
    , path   : '/users/' + login
    , method : 'GET'
    }
  , req = https.request(options, function(res) {
      res.on('data', callback)
    })
  req.end()
  req.on('error', throwError)
}


function writeUser(data) {
  var data_json = JSON.parse(data)
  console.log('Writing user: ' + data_json.login)
  fs.writeFile('../_assets/json/users/' + data_json.login + '.json', data, throwError)
}


// Make the requests to the user's API
function requestMembers(callback) {
  console.log('Requesting Members')
  var options = {
      host   : 'api.github.com'
    , port   : 443
    , path   : '/orgs/OpenVE/members'
    , method : 'GET'
    }
  , req = https.request(options, function(res) {
      res.on('data', callback)
    })
  req.end()
  req.on('error', throwError)
}


function writeMembers(data) {
  console.log(data)
  fs.writeFile('../_assets/json/members.json', data, throwError)
}


// Doing it...
requestMembers(function(data) {
  var data_json = JSON.parse(data)
  writeMembers(data)
  data_json.forEach( function (e) {
    requestUser(e.login, writeUser)
  })
})
