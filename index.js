var distance = require('turf-distance'),
    crosstrack = require('turf-crosstrack'),
    point = require('turf-point');

function flatten(coordinates) {
  return Array.prototype.concat.apply([], coordinates)
}

function pair(geometry) {

  function line(coordinates) {
    var c = coordinates.map(function(d, i, a) {
      if (i + 1 < a.length) {
        return [d, a[i+1]] 
      }
    });
    c.splice(-1, 1)
    return c
  }

  function polygon(coordinates) {
    return flatten(coordinates.map(line))
  }

  function multipolygon(coordinates) {
    return flatten(coordinates.map(polygon))
  }

  switch (geometry.type) {
    case 'Point':
      return [geometry.coordinates]
    case 'MultiPoint':
      return geometry.coordinates
    case 'LineString':
      return line(geometry.coordinates)
    case 'Polygon':
    case 'MultiLineString':
      return polygon(geometry.coordinates)
    case 'MultiPolygon':
      return multipolygon(geometry.coordinates)
    default:
      throw new Error("Invalid geometry")
  }
}

function makePoint(coordinates) {
  return point(coordinates[0], coordinates[1])
}

module.exports = function(point, features) {
  var nearest,
      minDist = Infinity;

  features.features.forEach(function(d, i) {
    var pairs = pair(d.geometry);

    pairs.forEach(function(j) {
      if (d.geometry.type === 'Point') {
        var dist = distance(point, makePoint(j), 'kilometers');
        if (dist < minDist) {
          minDist = dist;
          nearest = d;
        }
      } else {
        var dist = crosstrack(makePoint(j[0]), makePoint(j[1]), point, 'kilometers');
        if (dist < minDist) {
          minDist = dist;
          nearest = d;
        }
      }
    });
  });

  return nearest;
}
