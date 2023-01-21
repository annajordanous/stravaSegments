var StravaApiV3 = require('strava_api_v3');
var defaultClient = StravaApiV3.ApiClient.instance;

var accessToken = {


// Configure OAuth2 access token for authorization: strava_oauth
var strava_oauth = defaultClient.authentications['strava_oauth'];
strava_oauth.accessToken = "YOUR ACCESS TOKEN"

var api = new StravaApiV3.SegmentsApi()

var bounds = ; // {array[Float]} The latitude and longitude for two points describing a rectangular boundary for the search: [southwest corner latitutde, southwest corner longitude, northeast corner latitude, northeast corner longitude]

var opts = { 
  'activityType': activityType_example, // {String} Desired activity type.
  'minCat': 56, // {Integer} The minimum climbing category.
  'maxCat': 56 // {Integer} The maximum climbing category.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.exploreSegments(bounds, opts, callback);
