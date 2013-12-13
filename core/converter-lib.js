var Montage = require("montage").Montage;

exports.ConverterLib = Montage.specialize({

    constructor: {
        value: function ConverterLib () {
            this.super();
        }
    },

    isObject: {
        value: function () {
            if (arguments.length > 0) {
                var object = arguments[0],
                    properties = Array.prototype.slice.call(arguments, 1);

                if (object && typeof object === "object") {
                    return !properties.some(function (property) {
                        return !object.hasOwnProperty(property);
                    });
                }
            }
            return false;
        }
    }

});
