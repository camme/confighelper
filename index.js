// this module handles save and load operations for configs
var path = require("path");
var fs = require("fs");

var sitesIntervalRef = [];

// load config for widget. if now config file exists, create it with the default content
function loadWidgetConfig(configFile, defaultConfig)
{
    var widgetConfig = {};
    if (!path.existsSync(configFile))
    {
        widgetConfig = defaultConfig;
        saveWidgetConfig(configFile, widgetConfig);
    }
    else
    {
	    widgetConfig = JSON.parse(fs.readFileSync(configFile, "utf-8"));
	}
	return widgetConfig;
}

function saveWidgetConfig(configFile, widgetConfig)
{
    fs.writeFileSync(configFile, JSON.stringify(widgetConfig, null, "\t"), "utf-8");
}

exports.load = loadWidgetConfig;
exports.save = saveWidgetConfig;