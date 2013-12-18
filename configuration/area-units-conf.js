exports.AreaUnitsConf = {
    categoryName: "AREA",

    unitSI: "square_kilometer",

    prefixSI: false,

    units: {

        hectare: {
            symbol: "ha",

            formulaTo: {
                square_kilometer: "&VAL / 100.00",
                square_feet: "&VAL * 107640",
                square_mile: "&VAL * 0.0038610",
                square_inch: "&VAL * 15500000",
                acre: "&VAL * 2.4711",
                square_yard: "&VAL * 11960"
            }
        },

        square_kilometer: {
            symbol: "km²",

            formulaTo: {
                hectare: "&VAL / 0.010000",
                square_feet: "&VAL * 10764000",
                square_mile: "&VAL * 0.38610",
                square_inch: "&VAL * 1550000000",
                acre: "&VAL * 247.11",
                square_yard: "&VAL * 1196000"
            }
        },

        square_feet: {
            symbol: "ft²",

            formulaTo: {
                hectare: "&VAL / 107640",
                square_kilometer: "&VAL / 10764000",
                square_mile: "&VAL / 27878000",
                square_inch: "&VAL * 144.00",
                acre: "&VAL / 43560",
                square_yard: "&VAL * 0.11111"
            }
        },

        square_mile: {
            symbol: "mi²",

            formulaTo: {
                hectare: "&VAL / 0.0038610",
                square_feet: "&VAL * 27878000",
                square_kilometer: "&VAL / 0.38610",
                square_inch: "&VAL * 4014500000",
                acre: "&VAL * 640.00",
                square_yard: "&VAL * 3097600"
            }
        },

        square_inch: {
            symbol: "in²",

            formulaTo: {
                hectare: "&VAL / 15500000",
                square_feet: "&VAL * 0.0069444",
                square_kilometer: "&VAL / 1550000000",
                square_mile: "&VAL / 4014500000",
                acre: "&VAL / 6272600",
                square_yard: "&VAL * 0.00077160"
            }
        },

        acre: {
            symbol: "ac",

            formulaTo: {
                hectare: "&VAL / 2.4711",
                square_feet: "&VAL * 43560",
                square_kilometer: "&VAL / 247.11",
                square_mile: "&VAL * 0.0015625",
                square_inch: "&VAL * 6272600",
                square_yard: "&VAL * 4840.0"
            }
        },

        square_yard: {
            symbol: "yd²",

            formulaTo: {
                hectare: "&VAL / 11960",
                square_feet: "&VAL * 9.0000",
                square_kilometer: "&VAL / 1196000",
                square_mile: "&VAL / 3097600",
                square_inch: "&VAL * 1296.0",
                acre: "&VAL / 4840.0"
            }
        }
    }
};
