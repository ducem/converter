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

        expect(converter.convert(2)).toBe(4.4092452);
    });

    it("should convert gram to ounce", function () {
        converter.unitFromSelected = converter.units.gram;
        converter.unitToSelected = converter.units.ounce;

        expect(converter.convert(1)).toBe(0.0352739619);
    });

    it("should convert pound to kilogram", function () {
        converter.unitFromSelected = converter.units.pound;
        converter.unitToSelected = converter.units.kilogram;

        expect(converter.convert(4.4092452)).toBe(2);
    });

    it("should convert SI units", function () {
        converter.unitFromSelected = converter.units.kilogram;
        converter.unitToSelected = converter.units.gram;

        expect(converter.convert(1)).toBe(1000);

        converter.unitFromSelected = converter.units.decagram;
        expect(converter.convert(1)).toBe(10);

        converter.unitFromSelected = converter.units.kilogram;
        converter.unitToSelected = converter.units.decagram;
        expect(converter.convert(1)).toBe(100);

        converter.unitFromSelected = converter.units.kilogram;
        converter.unitToSelected = converter.units.centigram;
        expect(converter.convert(1)).toBe(100000);
    });

});
