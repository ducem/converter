var Converter = require("core/converter").Converter;

describe("converter-specs", function () {

    var converter = null;

    beforeEach(function () {
        converter = Converter.create();
        var unitCategories = converter.configuration.unitCategories;
        converter.unitCategorySelected = unitCategories.WEIGHT;
    });

    it("should convert kilogram to pound", function () {
        converter.unitFromSelected = converter.units.kilogram;
        converter.unitToSelected = converter.units.pound;

        expect(converter.convert(2)).toBe(4.4092);
    });

    it("should convert gram to ounce", function () {
        converter.unitFromSelected = converter.units.gram;
        converter.unitToSelected = converter.units.ounce;

        expect(converter.convert(1)).toBe(0.035274);
    });

    it("should convert pound to kilogram", function () {
        converter.unitFromSelected = converter.units.pound;
        converter.unitToSelected = converter.units.kilogram;

        expect(converter.convert(4.4092)).toBe(2);
    });

    it("should convert ounce to gram", function () {
        converter.unitFromSelected = converter.units.ounce;
        converter.unitToSelected = converter.units.gram;

        expect(converter.convert(0.035274)).toBe(1);
    });

});
