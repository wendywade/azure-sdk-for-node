/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.16.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the ExpressRouteCircuitRoutesTable class.
 * @constructor
 * The routes table associated with the ExpressRouteCircuit
 * @member {string} [network] network.
 * 
 * @member {string} [nextHop] nextHop
 * 
 * @member {string} [locPrf] locPrf.
 * 
 * @member {number} [weight] weight.
 * 
 * @member {string} [path] path .
 * 
 */
function ExpressRouteCircuitRoutesTable() {
}

/**
 * Defines the metadata of ExpressRouteCircuitRoutesTable
 *
 * @returns {object} metadata of ExpressRouteCircuitRoutesTable
 *
 */
ExpressRouteCircuitRoutesTable.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'ExpressRouteCircuitRoutesTable',
    type: {
      name: 'Composite',
      className: 'ExpressRouteCircuitRoutesTable',
      modelProperties: {
        network: {
          required: false,
          serializedName: 'network',
          type: {
            name: 'String'
          }
        },
        nextHop: {
          required: false,
          serializedName: 'nextHop',
          type: {
            name: 'String'
          }
        },
        locPrf: {
          required: false,
          serializedName: 'locPrf',
          type: {
            name: 'String'
          }
        },
        weight: {
          required: false,
          serializedName: 'weight',
          type: {
            name: 'Number'
          }
        },
        path: {
          required: false,
          serializedName: 'path',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = ExpressRouteCircuitRoutesTable;
