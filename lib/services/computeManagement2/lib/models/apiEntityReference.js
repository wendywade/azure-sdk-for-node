/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.13.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the ApiEntityReference class.
 * @constructor
 * The API entity reference.
 * @member {string} [id] Gets or sets the relative URL in the previous Service
 * Management API's namespace. For Example:
 * /subscriptions/{SubcriptionId}/resourceGroups/{ResourceGroupName}/...
 * 
 */
function ApiEntityReference(parameters) {
  if (parameters !== null && parameters !== undefined) {
    if (parameters.id !== undefined) {
      this.id = parameters.id;
    }
  }    
}


/**
 * Validate the payload against the ApiEntityReference schema
 *
 * @param {JSON} payload
 *
 */
ApiEntityReference.prototype.serialize = function () {
  var payload = {};
  if (this['id'] !== null && this['id'] !== undefined) {
    if (typeof this['id'].valueOf() !== 'string') {
      throw new Error('this[\'id\'] must be of type string.');
    }
    payload['id'] = this['id'];
  }

  return payload;
};

/**
 * Deserialize the instance to ApiEntityReference schema
 *
 * @param {JSON} instance
 *
 */
ApiEntityReference.prototype.deserialize = function (instance) {
  if (instance) {
    if (instance['id'] !== undefined) {
      this['id'] = instance['id'];
    }
  }

  return this;
};

module.exports = ApiEntityReference;