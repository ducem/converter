var Montage = require("montage/core/core").Montage,
    Converter = require("core/converter").Converter;

exports.AppDelegate = Montage.specialize({

    constructor: {
        value: function ApplicationDelegate() {
            this.super();
        }
    },

    willFinishLoading: {
        value: function (app) {

            app.converter = Converter.create();
        }
    }

});
