/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.14.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var util = require('util');

/**
 * @class
 * Initializes a new instance of the IOSMAMPolicyCollection class.
 * @constructor
 * @member {array} value
 * 
 * @member {string} [nextlink] Gets the URL to get the next set of results.
 * 
 */
function IOSMAMPolicyCollection() {
}

util.inherits(IOSMAMPolicyCollection, Array);

/**
 * Defines the metadata of IOSMAMPolicyCollection
 *
 * @returns {object} metadata of IOSMAMPolicyCollection
 *
 */
IOSMAMPolicyCollection.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'IOSMAMPolicyCollection',
    type: {
      name: 'Composite',
      className: 'IOSMAMPolicyCollection',
      modelProperties: {
        value: {
          required: true,
          serializedName: '',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'IOSMAMPolicyElementType',
                type: {
                  name: 'Composite',
                  className: 'IOSMAMPolicy'
                }
            }
          }
        },
        nextlink: {
          required: false,
          serializedName: 'nextlink',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = IOSMAMPolicyCollection;