var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;

var Level0 = new Schema({
    user_id    : String,
    content    : String,
    updated_at : Date
});

mongoose.Promise = global.Promise;
mongoose.model( 'Level0', Level0 );
mongoose.connect( 'mongodb://localhost/express-todo' );
