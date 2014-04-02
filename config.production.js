// general configuration
var mongoose = require('mongoose');
var config = {
  db_host: 'localhost',
  db_name: 'YOUR_MONGODB_DBNAME',
  db_collection_twitter: 'YOUR_MONGODB_COLLECTION',
  db_debug: 0,
  twitter_auth: false,
  twitter_harvest_search: '#HASHTAG_TO_SEARCH', // hashtags can be combined (example #apple OR #pear)
  twitter_query_count: 100,
  twitter_result_type: "recent",


  // Twitter Harvester Schema API 1.1
  tw_harvest_schema_11: {
    contributors : mongoose.Schema.Types.Mixed,
    coordinates: mongoose.Schema.Types.Mixed,
    created_at: Date,
    current_user_retweet : mongoose.Schema.Types.Mixed,
    entities: mongoose.Schema.Types.Mixed,
    favorited : Boolean,
    geo : mongoose.Schema.Types.Mixed,
    id: Number,
    id_str : String,
    in_reply_to_screen_name : String,
    in_reply_to_status_id : Number,
    in_reply_to_status_id_str: String,
    in_reply_to_user_id : Number,
    in_reply_to_user_id_str : String,
    place : mongoose.Schema.Types.Mixed,
    possibly_sensitive : Boolean,
    scopes : mongoose.Schema.Types.Mixed,
    retweet_count : Number,
    retweeted_status: mongoose.Schema.Types.Mixed,
    retweeted : Boolean,
    source: String,
    text : String,
    truncated : Boolean,
    user : mongoose.Schema.Types.Mixed,
    withheld_copyright :  Boolean,
    withheld_in_countries : mongoose.Schema.Types.Mixed,
    withheld_scope : String,
  },
}

module.exports = config;
