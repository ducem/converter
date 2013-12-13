var Montage = require("montage").Montage,
    ConverterLib = require("core/converter-lib").ConverterLib,
    Configuration = require("core/configuration").Configuration,

    VALUE_PATTERN = "&VAL";

exports.Converter = Montage.specialize({

    constructor: {
        value: function Converter () {
            this.super();

            this.configuration = Configuration.create();
            this.units = this.configuration.unitNames;
            this.unitCategories = this.configuration.unitCategories;
        }
    },

    configuration: {
        value: null
    },

    units: {
        value: null
    },

    _unitCategorySelected: {
        value: null
    },

    unitCategorySelected: {
        set: function (unitCategory) {
            if (this.configuration.hasUnitCategory(unitCategory)) {
                this._unitCategorySelected = unitCategory;
            }
        },
        get: function () {
            return this._unitCategorySelected;
        }
    },

    _unitFromSelected: {
        value: null
    },

    unitFromSelected: {
        set: function (unit) {
            if (this.configuration.hasUnit(unit)) {
                this._unitFromSelected = unit;
            }
        },
        get: function () {
            return this._unitFromSelected;
        }
    },

    _unitToSelected: {
        value: null
    },

    unitToSelected: {
        set: function (unit) {
            if (this.configuration.hasUnit(unit)) {
                this._unitToSelected = unit;
            }
        },
        get: function () {
            return this._unitToSelected;
        }
    },

    getFormula: {
        value: function (from, to) {
            if (this.configuration) {
                var unitCategory = this.configuration.units[this.unitCategorySelected];

                if (ConverterLib.isObject(unitCategory, from)) {
                    var formulas = unitCategory[from].formulaTo;
                    return ConverterLib.isObject(formulas, to) ? formulas[to] : null;
                }
            }

            return null;
        }
    },

    getFormulaParsed: {
        value: function (from, to, value) {
            var formula = this.getFormula(from, to, value);

            if (typeof formula === "string" && formula.length > 0) {
                return formula.replace(VALUE_PATTERN, value);
            }

            return null;
        }
    },

    convert: {
        value: function (value) {
            var formulaParsed = this.getFormulaParsed(this.unitFromSelected, this.unitToSelected, value);

            if (formulaParsed) {
                var convert = new Function ('return' + formulaParsed);
                return convert();
            }
        }
    }

});
