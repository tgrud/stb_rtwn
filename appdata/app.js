'use strict';

var request = require('request');
var arrandom = require('arrandom');

var data = [
	{
		"course_id": 102,
		"badge_id": "img/cool.png"
	},
	{
		"course_id": 104,
		"badge_id": "img/rad.png"
	},
	{
		"course_id": 111,
		"badge_id": "img/sweet.png"
	},
	{
		"course_id": 112,
		"badge_id": "img/totes.png"
	},
	{
		"course_id": 105,
		"badge_id": "img/wow.png"
	},
	{
		"course_id": 97,
		"badge_id": "img/omazing.png"
	},
	{
		"course_id": 98,
		"badge_id": "img/right.png"
	},
	{
		"course_id": 101,
		"badge_id": "img/ftw.png"
	},
	{
		"course_id": 28,
		"badge_id": "img/best.png"
	},
	{
		"course_id": 22,
		"badge_id": "img/win.png"
	},
	{
		"course_id": 108,
		"badge_id": "img/dude.png"
	}
];

var requestObj = {
	json: data,
	method: 'POST',
	url: 'http://0.0.0.0:8000'
};

(function _request () {
	requestObj.json = [arrandom(data)[0]];
	request(requestObj, function(err){
		if (err) console.log(err);
		setTimeout(_request, 1900);
	});
})();
