var Montage = require("montage").Montage,
    UnitsConf = require("configuration/units-conf").UnitsConf;

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
