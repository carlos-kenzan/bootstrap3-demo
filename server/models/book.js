'use strict';

module.exports = function(Book) {
  Book.isAvailable = function(cb) {
    var quantityOnHand= 5; // TODO - ADD LOGIC FOR MODEL TO DISPLAY QUANTITY ON HAND
    var response = quantityOnHand > 0;

    cb(null, response);
  };
  Book.remoteMethod(
    'isAvailable', {
      http: {
        path: '/:id/isAvailable',
        verb: 'get'
      },
      returns: {
        arg: 'status',
        type: 'boolean'
      }
    }
  );
};
