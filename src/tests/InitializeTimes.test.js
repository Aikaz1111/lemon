import initializeTimes from '../utils/InitializeTimes';

describe('initializeTimes', () => {
  test('should return the correct default times', () => {
    const expectedTimes = [
      "17:00",
      "18:00",
      "19:00",
    ];
    
    const actualTimes = initializeTimes();  // Вызов функции
    expect(actualTimes).toEqual(expectedTimes);  // Сравнение результата
  });
});