/**
 * Created by thibault on 12/13/13.
 */
/*global describe,beforeEach,it,expect,waitsFor,runs*/

var Converter = require("core/converter").Converter;

describe("converter-specs", function () {

    var converter = null;

    beforeEach(function () {
        converter = Converter.create();
        var unitCategories = converter.configuration.unitCategories;
        converter.unitCategorySelected = unitCategories.TEMPERATURE;
    });

    it("should converter celcius to fahtrenheit", function () {
        converter.unitFromSelected = converter.units.celsius;
        converter.unitToSelected = converter.units.fahrenheit;

        expect(converter.convert(0)).toBe(32);
    });

});
