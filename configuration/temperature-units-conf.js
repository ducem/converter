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
                celsius: "(1.8 * &VAL) + 32",
                kelvin: "&VAL + 273.15"
            }
        }
    }
};
