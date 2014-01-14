/**
 * Created by cedric on 21/13/13.
 */
/*global describe,beforeEach,it,expect,waitsFor,runs*/

var Converter = require("core/converter").Converter;

describe("converter-specs", function () {

    var converter = null;

    beforeEach(function () {
        converter = Converter.create();
        var unitCategories = converter.configuration.unitCategories;
        converter.unitCategorySelected = unitCategories.VOLUME;
    });

    it("should convert cubic_yard to cubic_feet", function () {
        converter.unitFromSelected = converter.units.cubic_yard;
        converter.unitToSelected = converter.units.cubic_feet;

        expect(converter.convert(4)).toBe(108);
    });

    it("should convert cubic_meter to us_ounce", function () {
        converter.unitFromSelected = converter.units.cubic_meter;
        converter.unitToSelected = converter.units.us_ounce;

        expect(converter.convert(5)).toBe(169070);
    });

    it("should convert liter to us_barrel_liquid", function () {
        converter.unitFromSelected = converter.units.liter;
        converter.unitToSelected = converter.units.us_barrel_liquid;

        expect(converter.convert(500)).toBe(4.1932);
    });

    it("should convert cubic_inch to cubic_yard", function () {
        converter.unitFromSelected = converter.units.cubic_inch;
        converter.unitToSelected = converter.units.cubic_yard;

        expect(converter.convert(1000)).toBe(0.021433);
    });
});
