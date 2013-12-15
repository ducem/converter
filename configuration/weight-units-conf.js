/* 
    Kilograms to Pounds
    Grams to Ounces

    pounds to kg
    Ounces to Gram
*/
exports.WeightUnitsConf = {
    categoryName: "WEIGHT",

    units: {

        kilogram: {
            formulaTo: {
                pound: "&VAL * 2.2046"
            }
        },

        gram: {
            formulaTo: {
                ounce: "&VAL * 0.035274"
            }
        },

        pound: {
            formulaTo: {
                kilogram: "&VAL / 2.2046"
            }
        },

        ounce: {
            formulaTo: {
                gram: "&VAL / 0.035274"
            }
        }
    }
};