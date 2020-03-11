## jest-environment-shipchain

When including Google's Protocol Buffers in a project that uses Jest for testing, errors can occur 
during serialization/deserialization between `Buffer` <--> `UInt8Array` data.  This issue has been 
described here: https://github.com/facebook/jest/issues/4422

One workaround is to extend `jest-environment-node` and include UInt8Array in the globals.  This 
package does that environment extension in a similar fashion as `jest-environment-aegir` but allows 
ShipChain the ability to provide our own updates.


### Usage

Install this package
```shell script
npm install jest-environment-shipchain
```

Add this to the Jest configuration

```js
module.exports = {
    testEnvironment: "shipchain",
    ...
}
```
