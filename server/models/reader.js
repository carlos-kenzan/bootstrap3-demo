'use strict';

module.exports = function(Reader) {
  // TODO - MOVE INTO A MIXIN
  const disabledMethods = [
    'updateAttributes',
    'findById',
    'destroy',
    'upsert',
    'upsertWithWhere',
    'destroyById',
    'createChangeStream',
    'exists',
    'replaceById',
    'count',
  ];
  disabledMethods.forEach(method => {Reader.disableRemoteMethodByName(method)});
};
