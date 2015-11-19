'use strict';

/*jshint camelcase: false */

angular.module('ngSaApp')
	.factory('Zone', function ()
	{
	    function Zone(data)
	    {
        	this.customer = data.customer;
        	this.facility = data.facility;
        	this.uuid = data.zone;
        	this.name = data.name;
        	this.parentNames = ($.isArray(data.parent_names) ? data.parent_names : (data.parent_names ? [ data.parent_names ] : []));
        	this.parents = ($.isArray(data.parents) ? data.parents : (data.parents ? [ data.parents ] : []));
        	this.type = data.type;
        	this.deviceCounts =
        	{
       			lights: (data.lights ? data.lights : 0),
       			dimlights: (data.dimlights ? data.dimlights : 0),
       			switches: (data.switches ? data.switches : 0),
       			dimswitches: (data.dimswitches ? data.dimswitches : 0),
       			occupancySensors: (data.occupancy_sensors ? data.occupancy_sensors : 0),
       			photoSensors: (data.photo_sensors ? data.photo_sensors : 0),
       			thermostats: (data.thermostats ? data.thermostats : 0),
       			temperatureSensors: (data.temperature_sensors ? data.temperature_sensors : 0),
       			binaryInputs: (data.binary_inputs ? data.binary_inputs : 0),
       			binaryOutputs: (data.binary_outputs ? data.binary_outputs : 0),
       			multistateInputs: (data.multistate_inputs ? data.multistate_inputs : 0),
       			multistateOutputs: (data.multistate_outputs ? data.multistate_outputs : 0),
       			extenders: (data.extenders ? data.extenders : 0),
       			mainPowerOutlets: (data.main_power_outlets ? data.main_power_outlets : 0)
        	};
        	this.count = data.count;
        	
        	this.getDeviceCount = function ()
        	{
        		// Get the total device counts
        		var count = 0;
        		$.each(this.deviceCounts, function (name, value)
        		{
        			count += value;
        		});
        		return count;
        	};
	    }
	    return Zone;
	});
