'use strict';

/**
 * Logic inspired from https://github.com/ipfs/jest-environment-aegir
 * but without dependencies on Aegir specific tooling and update cycle
 *
 * @type {NodeEnvironment}
 */

const JestEnvironmentNode = require('jest-environment-node');

class JestEnvironmentShipChain extends JestEnvironmentNode {
    constructor (config) {
        super(Object.assign({}, config, {
            globals: Object.assign({}, config.globals, {
                Uint8Array: Uint8Array
            })
        }));
    }
}

module.exports = JestEnvironmentShipChain;
