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
        converter.unitCategorySelected = unitCategories.AREA;
    });

    it("should convert square_kilometer to acre", function () {
        converter.unitFromSelected = converter.units.square_kilometer;
        converter.unitToSelected = converter.units.acre;

        expect(converter.convert(1)).toBe(247.11);
    });

    it("should convert acre to square_kilometer", function () {
        converter.unitFromSelected = converter.units.acre;
        converter.unitToSelected = converter.units.square_kilometer;

        expect(converter.convert(247.11)).toBe(1);
    });

    it("should convert square_kilometer to square_mile", function () {
        converter.unitFromSelected = converter.units.square_kilometer;
        converter.unitToSelected = converter.units.square_mile;

        expect(converter.convert(2)).toBe(0.77220);
    });

    it("should convert square_yard to acre", function () {
        converter.unitFromSelected = converter.units.square_yard;
        converter.unitToSelected = converter.units.acre;

        expect(converter.convert(2)).toBe(0.00041322314049586776);
    });
});
