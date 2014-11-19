var test = require('tape'),
    nearestFeature = require('./');

test('crosstrack', function(t){

  var nearest = nearestFeature(point, features)

  t.ok(nearest, 'should return a result')
  t.equal(typeof(nearest), 'object', 'should be an object')
  t.equal(nearest.type, 'Feature', 'should be a Feature')
  t.equal(nearest.properties.id, 1, 'should return feature 1 as the nearest')
  t.end()
})


var point = {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -49.5703125,
          53.74871079689897
        ]
      }
    }

var features = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "id": 1
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -69.60937499999999,
              51.17934297928927
            ],
            [
              -71.015625,
              48.45835188280866
            ],
            [
              -93.8671875,
              28.613459424004414
            ],
            [
              -45,
              24.206889622398023
            ],
            [
              -39.7265625,
              41.244772343082076
            ],
            [
              -46.7578125,
              47.98992166741417
            ],
            [
              -69.60937499999999,
              51.17934297928927
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 2
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -31.289062500000004,
              10.833305983642491
            ],
            [
              -31.289062500000004,
              34.30714385628804
            ],
            [
              -7.03125,
              34.30714385628804
            ],
            [
              -7.03125,
              10.833305983642491
            ],
            [
              -31.289062500000004,
              10.833305983642491
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 3
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          18.984375,
          57.32652122521709
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 4
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            19.6875,
            33.43144133557529
          ],
          [
            11.25,
            45.089035564831015
          ],
          [
            -7.03125,
            46.558860303117164
          ],
          [
            -11.6015625,
            54.367758524068385
          ],
          [
            6.328125,
            53.5403073915002
          ],
          [
            35.15625,
            51.17934297928927
          ]
        ]
      }
    }
  ]
}