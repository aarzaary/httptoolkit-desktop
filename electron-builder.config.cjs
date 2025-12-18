// This config just re-exposes the config from package.json, but
// disables code signing & notarization for PR builds where it won't work.

const packageJson = require('./package.json');

const unsignedMode = process.env.ENABLE_SIGNING !== 'true';

const config = packageJson.build;

if (unsignedMode) {
  console.log('\nBuilding in UNSIGNED mode\n');

  // Make it abundantly clear in the output that the builds aren't signed, so
  // we don't accidentally distribute them. Different app & file names throughout.
  config.productName = 'HTTP Toolkit Unofficial';
  config.extraMetadata.name = 'HTTP-Toolkit-Unofficial';
  config.extraMetadata.productName = 'HTTP-Toolkit-Unofficial';
<<<<<<< HEAD:electron-builder.config.js

  // config.artifactName = config.artifactName.replace('${ext}', 'dev.${ext}');
  // for (let field in config) {
  //   if (config[field]?.artifactName) {
  //     config[field].artifactName =
  //       config[field].artifactName.replace('${ext}', 'dev.${ext}');
  //   }
  // }
=======
>>>>>>> origin/main:electron-builder.config.cjs

  config.mac.forceCodeSigning = false;
  config.mac.notarize = false;
  config.win.forceCodeSigning = false;
  process.env.CSC_IDENTITY_AUTO_DISCOVERY = 'false';
} else {
  console.log('\nBuilding in SIGNED mode\n');
}

module.exports = config;
