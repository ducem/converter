exports.TemperatureUnitsConf = {
    categoryName: "TEMPERATURE",

    units: {

        celsius: {
            formulaTo: {
                fahrenheit: "(1.8 * &VAL) + 32",
                kelvin: "&VAL + 273.15"
            }
        },

        fahrenheit: {
            formulaTo: {
                celsius: "(&VAL - 32) * (5/9)",
                kelvin: "((&VAL - 32) / 1.8000) + 273.15"
            }
        },

        kelvin: {
            formulaTo: {
                celsius: "&VAL - 273.15",
                fahrenheit: "(&VAL - 273.15) * 1.8000 + 32.00"
            }
        }
    }
};
