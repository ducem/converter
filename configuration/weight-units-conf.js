exports.WeightUnitsConf = {

    categoryName: "WEIGHT",

    unitSI: "gram",

    prefixSI: true,

    precision: 3,

    units: {

        gram: {
            symbol: "g",

            formulaTo: {
                ounce: "&VAL * 0.0352739619",
                pound: "&VAL * 0.0022046226"
            }
        },

        pound: {
            symbol: "lb",

            formulaTo: {
                gram: "&VAL / 0.0022046226"
            }
        },

        ounce: {
            symbol: "oz",

            formulaTo: {
                gram: "&VAL / 0.0352739619"
            }
        }
    }
};
