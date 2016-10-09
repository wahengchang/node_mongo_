require( '../models' );
var timestamp = require( '../timestamp' );

var mongoose = require( 'mongoose' );
var Level0     = mongoose.model( 'Level0' );


var content = process.argv[2]  + timestamp()

new Level0({
    content    : content,
    updated_at : Date.now()
}).save( function ( err, todo, count ){
  if( err ) console.log( err );
  else console.log("add "+content+" complete")
});