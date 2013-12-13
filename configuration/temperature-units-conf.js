exports.TemperatureUnitsConf = {
    categoryName: "TEMPERATURE",

    units: {

        celcius: {
            formulaTo: {
                fahtrenheit: "(1.8 * &VAL) + 32",
                kelvin: "&VAL + 273.15"
            }
        },

        fahtrenheit: {
            formulaTo: {
                fahtrenheit: "(1.8 * &VAL) + 32",
                kelvin: "&VAL + 273.15"
            }
        }
    }
};

