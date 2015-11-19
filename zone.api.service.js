'use strict';

/*jshint camelcase: false */

angular.module('ngSaApp')
  	.service('zoneApi', function (api, Zone, $q)
	{
  	    this.get = function (uuid)
  	    {
  	  		// Get the zone by uuid
  	  		var d = $q.defer();
            api.get('/zones?customer=*&query=zone:' + uuid + '&row_count=1')
            	.then(function (response)
            	{
    	            d.resolve(new Zone(response.data.docs[0]));
            	}, function (error)
            	{
    		    	d.reject(error);
            	});
  	    	
  	    	return d.promise;
  		};
	});
