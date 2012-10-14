// main.js
// =======
//

require.config({
  paths : {
    text       : 'lib/text'
  , jquery     : 'lib/jquery'
  , underscore : 'lib/underscore-amd'
  , app        : 'app'
  }
})

require(['app'], function(app) {

  app.init()

})
