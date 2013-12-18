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

    _getSIFormula: {
        value: function (from, to) {
            var unitCategory = this.configuration.units[this.unitCategorySelected],
                formulaToInject = null,
                unitFrom = unitCategory[from];

            if (unitFrom.SI === true) {
                formulaToInject = VALUE_PATTERN + " * Math.pow(10, " + unitFrom.power + ")";
            } else {
                formulaToInject = unitCategory[from].formulaTo[unitCategory.unitReferenceSI];
            }

            if (to === unitCategory.unitReferenceSI) {
                return formulaToInject;
            }

            var formula = this.getFormula(unitCategory.unitReferenceSI, to);
            return formula.replace(VALUE_PATTERN, formulaToInject);
        }
    },

    getFormula: {
        value: function (from, to) {
            if (this.configuration) {
                var unitCategory = this.configuration.units[this.unitCategorySelected];

                if (ConverterLib.isObject(unitCategory, from) && ConverterLib.isObject(unitCategory, to)) {
                    if (from !== unitCategory.unitReferenceSI &&
                        (unitCategory[from].SI === true || unitCategory[to].SI === true)) { // SI unit transform to unitSi

                        return this._getSIFormula(from, to);
                    }

                    return unitCategory[from].formulaTo[to];
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
            if(isNaN(value)) {
                throw new Error('The given value in the function "convert" is not number.');
            }

            var formulaParsed = this.getFormulaParsed(this.unitFromSelected, this.unitToSelected, value);

            if (formulaParsed) {
                var convert = new Function ('return ' + formulaParsed);
                return convert();
            }
        }
    },

    swapUnits: {
        value: function () {
            var unitTemp = this.unitToSelected;

            this.unitToSelected = this.unitFromSelected;
            this.unitFromSelected = unitTemp;
        }
    }

});
