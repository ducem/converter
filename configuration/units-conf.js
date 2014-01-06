exports.Conf = {

    UnitsConf: {
        TemperatureUnitsConf: require("configuration/temperature-units-conf").TemperatureUnitsConf,
        WeightUnitsConf: require("configuration/weight-units-conf").WeightUnitsConf,
        AreaUnitsConf: require("configuration/area-units-conf").AreaUnitsConf,
        VolumeUnitsConf: require("configuration/volume-units-conf").VolumeUnitsConf
    },

    MetricPrefix: require("configuration/metric-prefix").MetricPrefix

};
