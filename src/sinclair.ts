const enum coefficients {
    AMale2009   = 0.784780654,
    BMale2009   = 173.961,
    AFemale2009 = 1.056683941,
    BFemale2009 = 125.441,

    AMale2013   = 0.794358141,
    BMale2013   = 174.393,
    AFemale2013 = 0.897260740,
    BFemale2013 = 148.026,

    AMale2017   = 0.751945030,
    BMale2017   = 175.508,
    AFemale2017 = 0.783497476,
    BFemale2017 = 153.655,

    AMale2021   = 0.722762521,
    BMale2021   = 193.609,
    AFemale2021 = 0.787004341,
    BFemale2021 = 153.757,
}

interface CoefficientSettings {
    ACoefficient : number
    BCoefficient : number
}

const SinclairCalculator = {
    getSinclairCoefficient: function (bodyWeightKg : string, total : string, coeffSettings : CoefficientSettings) {
        const bodyweight = parseFloat(bodyWeightKg);

        const x = Math.log10(bodyweight / coeffSettings.BCoefficient);
        const ax2 = coeffSettings.ACoefficient * Math.pow(x, 2);
        return parseFloat(total) * Math.pow(10, ax2);
    },

    doSinclairCalc: function (bodyweight : string, totalKg: string, coeffSettings : CoefficientSettings) {
        return this.getSinclairCoefficient(bodyweight, totalKg, coeffSettings)
    },

    getSinclair: function (year : string, isMale : boolean, bodyWeightKg : string, total : string) {
        let coeffSettings : CoefficientSettings;
        // Set the coefficient based on the year
        switch (parseInt(year)) {
            case 2009:
                coeffSettings = { ACoefficient: isMale ? coefficients.AMale2009 : coefficients.AFemale2009, BCoefficient: isMale ? coefficients.BMale2009 : coefficients.BFemale2009 };
                break
            case 2013:
                coeffSettings = { ACoefficient: isMale ? coefficients.AMale2013 : coefficients.AFemale2013, BCoefficient: isMale ? coefficients.BMale2013 : coefficients.BFemale2013 };
                break
            case 2017:
                coeffSettings = { ACoefficient: isMale ? coefficients.AMale2017 : coefficients.AFemale2017, BCoefficient: isMale ? coefficients.BMale2017 : coefficients.BFemale2017 };
                break
            case 2021:
                coeffSettings = { ACoefficient: isMale ? coefficients.AMale2021 : coefficients.AFemale2021, BCoefficient: isMale ? coefficients.BMale2021 : coefficients.BFemale2021 };
                break
            default:
                coeffSettings = { ACoefficient: isMale ? coefficients.AMale2021 : coefficients.AFemale2021, BCoefficient: isMale ? coefficients.BMale2021 : coefficients.BFemale2021 };
        }

        return this.doSinclairCalc(bodyWeightKg, total, coeffSettings);
    }
};

export default SinclairCalculator;