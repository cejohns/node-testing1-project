const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  test('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
  // test('[2] returns a copy, leaving the original object intact', () => {})
  test('[2] returns a copy, leaving the original object intact', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' };
    const originalCopy = { ...input }; // Make a shallow copy of the input
    utils.trimProperties(input);
    expect(input).toEqual(originalCopy); // The original object should remain unchanged
  });
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  test('[3] returns an object with the properties trimmed', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' };
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' };
    utils.trimPropertiesMutation(input);
    // Since we expect the original object to be mutated, it should now equal the expected object
    expect(input).toEqual(expected);
  });

  test('[4] the object returned is the exact same one we passed in', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' };
    const returnedObject = utils.trimPropertiesMutation(input);
    // Verify that the returned object is indeed the original object passed in
    expect(returnedObject).toBe(input); // Using toBe to check for the same reference
  });
});


describe('[Exercise 3] findLargestInteger', () => {
  test('[5] returns the largest number in an array of objects { integer: 2 }', () => {
    // Define an array of objects with varying 'integer' properties
    const arrayOfObjects = [
      { integer: 1 },
      { integer: 2 },
      { integer: 3 },
      { integer: -4 },
      { integer: 5 },
      { integer: 0 }
    ];
    // The expected largest integer in the above array
    const expected = 5;
    // Use the findLargestInteger function to find the actual largest integer
    const actual = utils.findLargestInteger(arrayOfObjects);
    // Assert that the actual largest integer matches the expected value
    expect(actual).toBe(expected);
  });
});


describe('[Exercise 4] Counter', () => {
  let counter;
  beforeEach(() => {
    // Initialize a new Counter instance before each test with an initial count of 3
    counter = new utils.Counter(3);
  });

  test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    // The first call should return the initial count, which has not been decremented yet
    expect(counter.countDown()).toBe(3);
  });

  test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    // After the first call, the second call should return the initial count minus one
    counter.countDown(); // First call, not checked
    expect(counter.countDown()).toBe(2); // Second call, should be initial count - 1
  });

  test('[8] the count eventually reaches zero but does not go below zero', () => {
    // Call countDown enough times to potentially reduce count below zero
    counter.countDown(); // 1st call, count = 2
    counter.countDown(); // 2nd call, count = 1
    counter.countDown(); // 3rd call, count = 0
    expect(counter.countDown()).toBe(0); // 4th call, count should still be 0
    // Verify count does not go below zero after several calls
    expect(counter.countDown()).toBe(0); // Additional call, count should remain 0
  });
});


describe('[Exercise 5] Seasons', () => {
  let seasons;
  beforeEach(() => {
    seasons = new utils.Seasons(); // each test must start with fresh seasons
  });

  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    expect(seasons.next()).toBe("summer");
  });

  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    seasons.next(); // Advance to the next season (summer to fall)
    expect(seasons.next()).toBe("fall");
  });

  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    seasons.next(); // summer
    seasons.next(); // fall
    expect(seasons.next()).toBe("winter");
  });

  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    seasons.next(); // summer
    seasons.next(); // fall
    seasons.next(); // winter
    expect(seasons.next()).toBe("spring");
  });

  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    seasons.next(); // summer
    seasons.next(); // fall
    seasons.next(); // winter
    seasons.next(); // spring
    expect(seasons.next()).toBe("summer");
  });

  test('[14] the 40th call of seasons.next returns "spring"', () => {
    // Simulate 39 calls to next, the 40th should return "spring"
    for (let i = 0; i < 39; i++) {
      seasons.next();
    }
    expect(seasons.next()).toBe("spring");
  });
});


describe('[Exercise 6] Car', () => {
  let focus;
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30); // each test starts with a fresh car
  });

  test('[15] driving the car returns the updated odometer', () => {
    const distanceDriven = focus.drive(300); // Drive for 300 miles
    expect(distanceDriven).toBe(300); // The odometer should now reflect the driven distance
    expect(focus.odometer).toBe(300); // Alternative check
  });

  test('[16] driving the car uses gas', () => {
    focus.drive(600); // Drive enough to use up gas
    expect(focus.gas).toBeLessThan(20); // Gas level should have decreased
  });

  test('[17] refueling allows to keep driving', () => {
    focus.drive(600); // Initially drive to use some gas
    const initialOdometer = focus.odometer;
    focus.refuel(10); // Refuel the car
    focus.drive(300); // Drive again after refueling
    expect(focus.odometer).toBeGreaterThan(initialOdometer); // Odometer should have increased further
  });

  test('[18] adding fuel to a full tank has no effect', () => {
    focus.refuel(5); // Attempt to refuel when the tank is already full
    expect(focus.gas).toBe(20); // Gas level should not exceed the tank size
  });
});


describe('[Exercise 7] isEvenNumberAsync', () => {
  test('[19] resolves true if passed an even number', async () => {
    // Use await to resolve the promise returned by isEvenNumberAsync
    const result = await utils.isEvenNumberAsync(4);
    expect(result).toBe(true); // Expect true for an even number
  });

  test('[20] resolves false if passed an odd number', async () => {
    // Use await to resolve the promise returned by isEvenNumberAsync
    const result = await utils.isEvenNumberAsync(5);
    expect(result).toBe(false); // Expect false for an odd number
  });
});

