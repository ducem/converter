exports.TemperatureUnitsConf = {
    categoryName: "TEMPERATURE",

    unitSI: "kelvin",

    prefixSI: false,

    units: {

        celsius: {
            symbol: "C",

            formulaTo: {
                fahrenheit: "(1.8 * &VAL) + 32",
                kelvin: "&VAL + 273.15"
            }
        },

        fahrenheit: {
            symbol: "F",

            formulaTo: {
                celsius: "(&VAL - 32) * (5/9)",
                kelvin: "((&VAL - 32) / 1.8000) + 273.15"
            }
        },

        kelvin: {
            symbol: "K",

            formulaTo: {
                celsius: "&VAL - 273.15",
                fahrenheit: "(&VAL - 273.15) * 1.8000 + 32.00"
            }
        }
    }

};
