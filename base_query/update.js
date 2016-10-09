require( '../models' );
var timestamp = require( '../timestamp' );

var mongoose = require( 'mongoose' );
var Level0     = mongoose.model( 'Level0' );


var content = process.argv[2]
var newContent = process.argv[3]

Level0.find({ content : content }).
exec( function ( err, result ){
  if(result){
    result[0].content = newContent;
    result[0].save( function ( err, todo, count ){
      if( err ) console.log( err );
      else console.log("update "+content+" complete")

    });

  }
  else{
    console.log("not found")
  }
});