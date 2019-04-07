// so far I'm baffled as to how to test this
// but I'll have a go
// ok found the cinema test spec

const assert = require('assert');
const EventsList = require('../models/list_app.js');

describe('EventsList', function () {
  let eventsList;

  beforeEach(function () {

  eventsList = new EventsList(document.querySelector('#events'));

}); // end before each

it('should be able to delete all the events', function () {
  const actual = eventsList.deleteAll();
  assert.strictEqual(actual, '');
});
});

// This is getting nowhere. Forget the specs file,
// forget trying to make it object oriented for now
