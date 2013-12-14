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

    it("should convert celcius to fahrenheit", function () {
        converter.unitFromSelected = converter.units.celsius;
        converter.unitToSelected = converter.units.fahrenheit;

        expect(converter.convert(0)).toBe(32);
    });

    it("should convert fahrenheit to celsius", function () {
        converter.unitFromSelected = converter.units.fahrenheit;
        converter.unitToSelected = converter.units.celsius;

        expect(converter.convert(32)).toBe(0);
    });

    it("should convert celsius to kelvin", function () {
        converter.unitFromSelected = converter.units.celsius;
        converter.unitToSelected = converter.units.kelvin;

        expect(converter.convert(2)).toBe(275.15);
    });

    it("should convert kelvin to celsius", function () {
        converter.unitFromSelected = converter.units.kelvin;
        converter.unitToSelected = converter.units.celsius;

        expect(converter.convert(200)).toBe(-73.14999999999998);
    });

    it("should convert kelvin to fahrenheit", function () {
        converter.unitFromSelected = converter.units.kelvin;
        converter.unitToSelected = converter.units.fahrenheit;

        expect(converter.convert(1)).toBe(-457.86999999999995);
    });

    it("should return an error", function () {
        converter.unitFromSelected = converter.units.kelvin;
        converter.unitToSelected = converter.units.fahrenheit;

        expect(converter.convert('string')).toBe('error');
    });

    it("should swaps units", function () {
        converter.unitFromSelected = converter.units.kelvin;
        converter.unitToSelected = converter.units.fahrenheit;
        converter.swapUnits();
        
        expect(converter.convert(-457.86999999999995)).toBe(1);
    });
});
