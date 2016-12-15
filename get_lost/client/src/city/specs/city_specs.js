var city = require('../city');
var assert = require('assert');

describe('city', function() {
  it('should have a name', function(){
    assert.equal("Caracas", city.name);
  });
  it('should have a language', function(){
    assert.equal("Spanish", city.language);
  });
  it('should have a currency', function(){
    assert.equal("Bolivar", city.currency);
  });
  it('should have coordinates', function(){
    assert.equal( 10.50 , city.coordinates.lat);
    assert.equal( -66.91, city.coordinates.lng);
  });






});
