var List = require('../list/list');
var assert = require('assert');

var list1;

describe('list', function(){

  beforeEach(function(){
    list1 = new List("Food")
  });
  it('should have type', function(){
    assert.equal('Food', list1.type);
  });
});

