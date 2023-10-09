const gaussian = require('gaussian');
import { toFixed } from './utils'; 

export const calcPERT = (optimistic: number, mostLikely: number, pessimistic: number) => toFixed((optimistic + (4 * mostLikely) + pessimistic) / 6);
export const calcStdDeviation = (optimistic: number, pessimistic: number): number => toFixed((pessimistic - optimistic) / 6);
export const calcVariance = (stdDeviation: number) =>  toFixed(Math.pow(stdDeviation, 2));

export const calcProbOfCompletion = (
  desiredCompletion: number,
  sumOfExpectedPERTS: number,
  sumOfVariance: number
) => {
  const dist = gaussian(sumOfExpectedPERTS, sumOfVariance);
  const zScore = toFixed((desiredCompletion - sumOfExpectedPERTS) / Math.pow(sumOfVariance, 0.5));
  const probOfCompletion = toFixed(dist.cdf(desiredCompletion).toFixed(3) * 100);
  return { probOfCompletion: probOfCompletion, zScore };
};
