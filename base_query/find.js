require( '../models' );
var timestamp = require( '../timestamp' );

var mongoose = require( 'mongoose' );
var Level0     = mongoose.model( 'Level0' );


var content = process.argv[2]

Level0.find({ content : content }).
sort( '-updated_at' ).
exec( function ( err, result ){
  if( err ) console.log( err );
  else console.log("result: ",result)
});