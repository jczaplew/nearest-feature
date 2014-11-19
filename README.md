nearest-feature
============
Find the closest feature to a point

### Install

````

````

### Parameters

|name|type|description|
|---|---|---|
| point | point | point to measure distance from |
| features | featurecollection | a FeatureCollection of geometries |

### Usage

````
nearestFeature(point, features)
````

### Example

````
var point = require("turf-point"),
    polygon = require("turf-polygon"),
    linestring = require("turf-linestring"),
    featurecollection = require("turf-featurecollection"),
    nearestFeature = require("nearest-feature");

var point1 = point(-114.96, 36.87),
    poly1 = polygon([[[20.0,0.0],[101.0,0.0],[101.0,1.0],[100.0,1.0],[100.0,0.0]]]),
    poly2 = polygon([[[20.0,0.0],[101.0,0.0],[101.0,1.0],[100.0,1.0],[100.0,0.0]]]),
    linestring1 = linestring([[102.0, -10.0], [103.0, 1.0], [104.0, 0.0], [130.0, 4.0]]),
    fc = featurecollection([poly1, poly2, linestring]);

var nearest = nearestFeature(point1, fc);

console.log(nearest);
````

### Credits
Array flattening via http://stackoverflow.com/questions/10865025/merge-flatten-an-array-of-arrays-in-javascript#comment31836362_10865042