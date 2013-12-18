var Montage = require("montage").Montage,
    Conf = require("configuration/units-conf").Conf,
    UnitsConf = Conf.UnitsConf,
    VALUE_PATTERN = "&VAL",
    MetricPrefix = Conf.MetricPrefix;

exports.Configuration = Montage.specialize({

    constructor: {
        value: function Configuration () {
            this.super();
            var self = this;

            this.units = {};
            this.unitCategories = {};
            this.unitNames = {};

            Object.keys(UnitsConf).forEach(function (unitCategoryKey) {

                var unitCategoryConf = UnitsConf[unitCategoryKey],
                    unitCategoryName = unitCategoryConf.categoryName.toUpperCase();

                self.units[unitCategoryName] = unitCategoryConf.units;

                if (unitCategoryConf.unitSI) {
                    self.units[unitCategoryName].unitReferenceSI = unitCategoryConf.unitSI;

                    if (unitCategoryConf.prefixSI === true) {
                        var injectedUnits = self._injectSIFormula(unitCategoryName, unitCategoryConf.unitSI);
                        self._populateUnitNamesWithArray(injectedUnits);
                    }
                }

                self.unitCategories[unitCategoryName] = unitCategoryName;
                self._populateUnitNamesWithUnitCategory(unitCategoryConf);
            });
        }
    },

    units: {
        value: null
    },

    unitNames: {
        value: null
    },

    unitCategories: {
        value: null
    },

    _populateUnitNamesWithUnitCategory: {
        value: function (unitCategory) {
            if (unitCategory && typeof unitCategory === "object" && typeof unitCategory.units === "object") {
                var units = unitCategory.units,
                    self = this;

                Object.keys(units).forEach(function (unitKey) {
                    self.unitNames[unitKey] = unitKey;
                });
            }
        }
    },

    _populateUnitNamesWithArray: {
        value: function (unitNames) {
            if (Array.isArray(unitNames)) {
                var self = this;

                unitNames.forEach(function (unitName) {
                    self.unitNames[unitName] = unitName;
                });
            }
        }
    },

    _injectSIFormula: {
        value: function (unitCategoryName, SiName) {
            var unitCategory = this.units[unitCategoryName],
                unitSi = unitCategory[SiName],
                symbolUnit = unitSi.symbol,
                formulas = unitSi.formulaTo,
                injectedUnits = [];

            Object.keys(MetricPrefix).forEach(function (prefix) {
                var metricPrefix = MetricPrefix[prefix],
                    metricPrefixName = prefix + SiName;

                unitCategory[metricPrefixName] = {
                    SI: true,
                    symbol: metricPrefix.symbol + symbolUnit,
                    power: metricPrefix.power
                };

                formulas[metricPrefixName] = VALUE_PATTERN + " / Math.pow(10," + metricPrefix.power + ")";

                injectedUnits.push(metricPrefixName);
            });

            return injectedUnits;
        }
    },

    hasUnitCategory: {
        value: function (categoryUnit) {
          return this.units.hasOwnProperty(categoryUnit);
        }
    },

    hasUnit: {
        value: function (unitName) {
            return this.unitNames.hasOwnProperty(unitName);
        }
    }

});
