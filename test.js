var test = require('tape'),
    nearestFeature = require('./');

test('crosstrack', function(t){
  var point = {"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[-49.5703,53.7487]}},
      features = {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"id":1},"geometry":{"type":"Polygon","coordinates":[[[-69.6094,51.1793],[-71.0156,48.4584],[-93.8672,28.6135],[-45,24.2069],[-39.7266,41.2448],[-46.7578,47.9899],[-69.6094,51.1793]]]}},{"type":"Feature","properties":{"id":2},"geometry":{"type":"Polygon","coordinates":[[[-31.2891,10.8333],[-31.2891,34.3071],[-7.0313,34.3071],[-7.0313,10.8333],[-31.2891,10.8333]]]}},{"type":"Feature","properties":{"id":3},"geometry":{"type":"Point","coordinates":[18.9844,57.3265]}},{"type":"Feature","properties":{"id":4},"geometry":{"type":"LineString","coordinates":[[19.6875,33.4314],[11.25,45.089],[-7.0313,46.5589],[-11.6016,54.3678],[6.3281,53.5403],[35.1563,51.1793]]}}]}
  
  var nearest = nearestFeature(point, features)

  t.ok(nearest, 'should return a result')
  t.equal(typeof(nearest), 'object', 'should be an object')
  t.equal(nearest.type, 'Feature', 'should be a Feature')
  t.equal(nearest.properties.id, 1, 'should return feature 1 as the nearest')
  t.end()
});
