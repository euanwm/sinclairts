import { Coefficients } from './coefficients';
import { CoefficientSettings } from './models';

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
                coeffSettings = { ACoefficient: isMale ? Coefficients.AMale2009 : Coefficients.AFemale2009, BCoefficient: isMale ? Coefficients.BMale2009 : Coefficients.BFemale2009 };
                break
            case 2013:
                coeffSettings = { ACoefficient: isMale ? Coefficients.AMale2013 : Coefficients.AFemale2013, BCoefficient: isMale ? Coefficients.BMale2013 : Coefficients.BFemale2013 };
                break
            case 2017:
                coeffSettings = { ACoefficient: isMale ? Coefficients.AMale2017 : Coefficients.AFemale2017, BCoefficient: isMale ? Coefficients.BMale2017 : Coefficients.BFemale2017 };
                break
            case 2021:
                coeffSettings = { ACoefficient: isMale ? Coefficients.AMale2021 : Coefficients.AFemale2021, BCoefficient: isMale ? Coefficients.BMale2021 : Coefficients.BFemale2021 };
                break
            default:
                coeffSettings = { ACoefficient: isMale ? Coefficients.AMale2021 : Coefficients.AFemale2021, BCoefficient: isMale ? Coefficients.BMale2021 : Coefficients.BFemale2021 };
        }

        return this.doSinclairCalc(bodyWeightKg, total, coeffSettings);
    }
};

export default SinclairCalculator;