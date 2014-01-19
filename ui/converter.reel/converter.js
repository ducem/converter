/**
 * @module ui/converter.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Converter
 * @extends Component
 */
exports.Converter = Component.specialize(/** @lends Converter# */ {
    constructor: {
        value: function Converter () {
            this.super();
        }
    },

    enterDocument: {
        value: function (firstime) {
            if (firstime) {
                var converter = this.converter,
                    unitCategories = converter.configuration.unitCategories;

                if (converter && unitCategories) {
                    converter.unitCategorySelected = unitCategories.TEMPERATURE;

                    converter.unitFromSelected = converter.units.celsius;
                    converter.unitToSelected = converter.units.fahrenheit;
                }

                this.addOwnPropertyChangeListener("valueToConvert", this);
            }
        }
    },

    converter: {
        value: null
    },

    valueToConvert: {
        value: null
    },

    convertedValue: {
        value: null
    },

    convert: {
        value: function (value) {
            if (value && !isNaN(value)) {
                return this.converter.convert(value);
            }
        }
    },

    handleValueToConvertChange: {
        value: function (value) {
            this.convertedValue = this.convert(value);
        }
    }

});
