cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "phonegap-nfc.NFC",
        "file": "plugins/phonegap-nfc/www/phonegap-nfc.js",
        "pluginId": "phonegap-nfc",
        "runs": true
    },
    {
        "id": "cordova-plugin-geolocation.geolocation",
        "file": "plugins/cordova-plugin-geolocation/www/android/geolocation.js",
        "pluginId": "cordova-plugin-geolocation",
        "clobbers": [
            "navigator.geolocation"
        ]
    },
    {
        "id": "cordova-plugin-geolocation.PositionError",
        "file": "plugins/cordova-plugin-geolocation/www/PositionError.js",
        "pluginId": "cordova-plugin-geolocation",
        "runs": true
    },
    {
        "id": "cordova-plugin-statusbar.statusbar",
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "id": "cordova-plugin-logtofile.logtofile",
        "file": "plugins/cordova-plugin-logtofile/www/logtofile.js",
        "pluginId": "cordova-plugin-logtofile",
        "clobbers": [
            "logToFile"
        ]
    },
    {
        "id": "cordova.plugins.diagnostic.Diagnostic",
        "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.js",
        "pluginId": "cordova.plugins.diagnostic",
        "clobbers": [
            "cordova.plugins.diagnostic"
        ]
    },
    {
        "id": "cordova-plugin-opensettings.Settings",
        "file": "plugins/cordova-plugin-opensettings/www/settings.js",
        "pluginId": "cordova-plugin-opensettings",
        "clobbers": [
            "cordova.plugins.settings"
        ]
    },
    {
        "id": "cordova-plugin-device.device",
        "file": "plugins/cordova-plugin-device/www/device.js",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "id": "cordova-plugin-imei.IMEIPlugin",
        "file": "plugins/cordova-plugin-imei/www/imei.js",
        "pluginId": "cordova-plugin-imei",
        "clobbers": [
            "window.plugins.imei"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.2",
    "phonegap-nfc": "0.6.6",
    "cordova-plugin-compat": "1.0.0",
    "cordova-plugin-geolocation": "2.4.3",
    "cordova-plugin-statusbar": "2.2.3",
    "cordova-plugin-splashscreen": "4.0.3",
    "cordova-plugin-logtofile": "1.1.2",
    "cordova.plugins.diagnostic": "3.6.4",
    "cordova-plugin-opensettings": "1.3",
    "cordova-plugin-device": "1.1.6",
    "cordova-plugin-imei": "0.0.1"
};
// BOTTOM OF METADATA
});