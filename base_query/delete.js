require( '../models' );
var timestamp = require( '../timestamp' );

var mongoose = require( 'mongoose' );
var Level0     = mongoose.model( 'Level0' );


var content = process.argv[2]

Level0.find({ content : content }).
exec( function ( err, result ){
  if(result){
    result[0].remove( function ( err, result ){
      if( err ) console.log(err);
      else console.log(result + " is deleted ...")
    });
  }
  else{
    console.log("not found")
  }
});