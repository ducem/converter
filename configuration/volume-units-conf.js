exports.VolumeUnitsConf = {
    categoryName: "VOLUME",

    unitSI: "liter",

    prefixSI: true,

    precision: 2,

    units: {

        liter: {
            symbol: "L",

            formulaTo: {
                cubic_meter: "&VAL / 1000.0",
                cubic_yard: "&VAL * 0.0013080",
                cubic_feet: "&VAL * 0.035315",
                cubic_inch: "&VAL * 61.024",
                us_ounce: "&VAL * 33.814",
                uk_ounce: "&VAL * 35.195",
                gallon_liquid: "&VAL * 0.26417",
                us_barrel_liquid: "&VAL * 0.0083864"
            }
        },

        cubic_meter: {
            symbol: "m³",

            formulaTo: {
                liter: "&VAL / 0.0010000",
                cubic_yard: "&VAL * 1.3080",
                cubic_feet: "&VAL * 35.315",
                cubic_inch: "&VAL * 61024",
                us_ounce: "&VAL * 33814",
                uk_ounce: "&VAL * 35195",
                gallon_liquid: "&VAL * 264.17",
                us_barrel_liquid: "&VAL * 8.3864"
            }
        },

        cubic_yard: {
            symbol: "yd³",

            formulaTo: {
                liter: "&VAL / 0.0013080",
                cubic_meter: "&VAL / 1.3080",
                cubic_feet: "&VAL * 27.000",
                cubic_inch: "&VAL * 46656",
                us_ounce: "&VAL * 25853",
                uk_ounce: "&VAL * 26909",
                gallon_liquid: "&VAL * 201.97",
                us_barrel_liquid: "&VAL * 6.4119"
            }
        },

        cubic_feet: {
            symbol: "ft³",

            formulaTo: {
                liter: "&VAL / 0.035315",
                cubic_meter: "&VAL / 35.315",
                cubic_yard: "&VAL * 0.037037",
                cubic_inch: "&VAL * 1728.0",
                us_ounce: "&VAL * 957.51",
                uk_ounce: "&VAL * 996.61",
                gallon_liquid: "&VAL * 7.4805",
                us_barrel_liquid: "&VAL * 0.23748"
            }
        },

        cubic_inch: {
            symbol: "in³",

            formulaTo: {
                liter: "&VAL / 61.024",
                cubic_meter: "&VAL / 61024",
                cubic_yard: "&VAL * 0.000021433",
                cubic_feet: "&VAL * 0.00057870",
                us_ounce: "&VAL * 0.55411",
                uk_ounce: "&VAL * 0.57674",
                gallon_liquid: "&VAL * 0.0043290",
                us_barrel_liquid: "&VAL * 0.00013743"
            }
        },

        us_ounce: {
            symbol: "US fl oz",

            formulaTo: {
                liter: "&VAL / 33.814",
                cubic_meter: "&VAL / 33814",
                cubic_yard: "&VAL * 0.000038681",
                cubic_feet: "&VAL * 0.0010444",
                cubic_inch: "&VAL * 1.8047",
                uk_ounce: "&VAL * 1.0408",
                gallon_liquid: "&VAL * 0.0078125",
                us_barrel_liquid: "&VAL * 0.00024802"
            }
        },

        uk_ounce: {
            symbol: "UK fl oz",

            formulaTo: {
                liter: "&VAL / 35.195",
                cubic_meter: "&VAL / 35195",
                cubic_yard: "&VAL * 0.000037163",
                cubic_feet: "&VAL * 0.0010034",
                cubic_inch: "&VAL * 1.7339",
                us_ounce: "&VAL * 0.96076",
                gallon_liquid: "&VAL * 0.0075059",
                us_barrel_liquid: "&VAL * 0.00023828"
            }
        },

        gallon_liquid: {
            symbol: "US gal lqd",

            formulaTo: {
                liter: "&VAL / 0.26417",
                cubic_meter: "&VAL / 264.17",
                cubic_yard: "&VAL * 0.0049511",
                cubic_feet: "&VAL * 0.13368",
                cubic_inch: "&VAL * 231.00",
                us_ounce: "&VAL * 128.00",
                uk_ounce: "&VAL * 133.23",
                us_barrel_liquid: "&VAL * 0.031746"
            }
        },

        us_barrel_liquid: {
            symbol: "US bbl lqd",

            formulaTo: {
                liter: "&VAL / 0.0083864",
                cubic_meter: "&VAL / 8.3864",
                cubic_yard: "&VAL * 0.15596",
                cubic_feet: "&VAL * 4.2109",
                cubic_inch: "&VAL * 7276.5",
                us_ounce: "&VAL * 4032.0",
                uk_ounce: "&VAL * 4196.7",
                gallon_liquid: "&VAL * 31.500"
            }
        }
    }
};
