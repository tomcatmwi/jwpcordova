cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-jwplayer.JWPlayer",
      "file": "plugins/cordova-jwplayer/www/JWPlayer.js",
      "pluginId": "cordova-jwplayer",
      "clobbers": [
        "window.plugins.JWPlayer"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-jwplayer": "0.0.1"
  };
});