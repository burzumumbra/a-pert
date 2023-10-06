var erf = require( '@stdlib/math-base-special-erf' );
var gaussian = require('gaussian');

const desiredCompletion = 12

const estimatePERT = (optimistic: number, mostLikely: number, pessimistic: number) => (optimistic + (4 * mostLikely) + pessimistic) / 6;
const stdDeviation = (optimistic: number, pessimistic: number) => (pessimistic - optimistic) / 6
const variance = (stdDeviation: number) =>  Math.pow(stdDeviation, 2)

const calculateZScore = (
  desiredCompletion: number,
  sumOfExpectedPERTS: number,
  sumOfVariance: number
) => {
  const dist = gaussian(sumOfExpectedPERTS, sumOfVariance);
  const zScore = (desiredCompletion - sumOfExpectedPERTS) / Math.pow(sumOfVariance, 0.5);
  return {probOfCompletion: dist.cdf(desiredCompletion)*100, zScore};
};


const estimate1 = estimatePERT(4, 6, 8);
const deviation1 = stdDeviation(4, 8);
const variance1 = variance(deviation1)
console.log('PERT 1: ',estimate1);
console.log('Std Deviation 1: ', deviation1);
console.log('Variance 1: ', variance1);

const estimate2 = estimatePERT(6, 8, 12);
const deviation2 = stdDeviation(6, 12);
const variance2 = variance(deviation2)
console.log('PERT 2: ',estimate2)
console.log('Std Deviation 2: ', deviation2)
console.log('Variance 2: ', variance2)

const sumEst = (estimate1 + estimate2);
console.log('Total PERT Estimated: ', sumEst)
const sumStdDeviation = (deviation1 + deviation2);
console.log('Total Std Deviation: ', sumStdDeviation);
const sumVariance = (variance1 + variance2);
console.log('Total Variance: ', sumVariance);

const proba = calculateZScore(
  desiredCompletion,
  sumEst,
  sumVariance
);

console.log('probability: ', proba)