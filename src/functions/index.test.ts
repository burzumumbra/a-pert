import { calcPERT, calcStdDeviation, calcVariance, calcProbOfCompletion} from ".";

describe('calcPERT First', () => {
  it('should return the correct PERT estimate', () => {
    const optimistic = 4;
    const mostLikely = 6;
    const pessimistic = 8;
    const expected = 6;
    const result = calcPERT(optimistic, mostLikely, pessimistic);
    expect(result).toEqual(expected);
  });
});

describe('calcPERT Second', () => {
  it('should return the correct PERT estimate', () => {
    const optimistic = 6;
    const mostLikely = 8;
    const pessimistic = 12;
    const expected = 8.333;
    const result = calcPERT(optimistic, mostLikely, pessimistic);
    expect(result).toEqual(expected);
  });
});

describe('calcStdDeviation First', () => {
  it('should return the correct standard deviation', () => {
    const optimistic = 4;
    const pessimistic = 8;
    const expected = 0.667;
    const result = calcStdDeviation(optimistic, pessimistic);
    expect(result).toEqual(expected);
  });
});

describe('calcStdDeviation Second', () => {
  it('should return the correct standard deviation', () => {
    const optimistic = 6;
    const pessimistic = 12;
    const expected = 1;
    const result = calcStdDeviation(optimistic, pessimistic);
    expect(result).toEqual(expected);
  });
});

describe('calcVariance First', () => {
  it('should return the correct variance', () => {
    const stdDeviation = 0.667;
    const expected = 0.445;
    const result = calcVariance(stdDeviation);
    expect(result).toEqual(expected);
  });
});

describe('calcVariance Second', () => {
  it('should return the correct variance', () => {
    const stdDeviation = 1;
    const expected = 1;
    const result = calcVariance(stdDeviation);
    expect(result).toEqual(expected);
  });
});

describe('calcProbOfCompletion', () => {
  it('should return the correct probability of completion', () => {
    const desiredCompletion = 12;
    const sumOfExpectedPERTS = 14.333;
    const sumOfVariance = 1.444;
    const expected = { probOfCompletion: 2.60, zScore: -1.941 };
    const result = calcProbOfCompletion(desiredCompletion, sumOfExpectedPERTS, sumOfVariance);
    expect(result).toEqual(expected);
  });
});
