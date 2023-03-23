import { sort, search, newsList } from "./main.js";

//Example testing for search function
/*
test("Search function testing", () => {
  expect(search(newsList)).toBe("I am a cool web developer");
});
*/

test("Search function testing, using 'Daddy Cool PapaG' as input", () => {
  // Start of Arrange Stage
  const a1 = "PapaG";                 
  const theExpectedResult = [];

  // Start of Act Stage
  const result = search(a1);

  // Start of Assert Stage
  expect(result).toEqual(theExpectedResult); // Assert
});

test("Search function testing, using 'light' as input", () => {
  // Start of Arrange Stage
  const a1 = "light";                 
  const theExpectedResult = [newsList[7]];

  // Start of Act Stage
  const result = search(a1);

  // Start of Assert Stage
  expect(result).toEqual(theExpectedResult); // Assert
});

test("Search function testing, using 'JourNalist' as input", () => {
  // Start of Arrange Stage
  const a1 = "JourNalist";                 
  const theExpectedResult = [newsList[0],newsList[6]];

  // Start of Act Stage
  const result = search(a1);

  // Start of Assert Stage
  expect(result).toEqual(theExpectedResult); // Assert
});

test("Search function testing, using empty string as input", () => {
  // Start of Arrange Stage
  const a1 = "";                 
  const theExpectedResult = newsList;

  // Start of Act Stage
  const result = search(a1);

  // Start of Assert Stage
  expect(result).toEqual(theExpectedResult); // Assert
});


test("Search function testing, using 'decoder' as input", () => {
  // Start of Arrange Stage
  const a1 = "decoder";                 
  const theExpectedResult = 2;

  // Start of Act Stage
  const result = search(a1).length;

  // Start of Assert Stage
  expect(result).toBe(theExpectedResult); // Assert
});


test("Sort function testing, using 'ascending' as input", () => {
  // Start of Arrange Stage
  const a1 = "ascending";                 
  const theExpectedResult1 = "Buried underpants and tea bags help scientists evaluate soil";
  const theExpectedResult2 = "What films should an aspiring journalist watch?";

  // Start of Act Stage
  const result = sort(a1);

  // Start of Assert Stage
  expect(result[0]).toEqual(theExpectedResult1); // Assert
  expect(result[result.length-1]).toEqual(theExpectedResult2); // Assert
});

test("Sort function testing, using 'descending' as input", () => {
  // Start of Arrange Stage
  const a1 = "descending"; 
  const theExpectedResult1 = "What films should an aspiring journalist watch?";                
  const theExpectedResult2 = "Buried underpants and tea bags help scientists evaluate soil";

  // Start of Act Stage
  const result = sort(a1);

  // Start of Assert Stage
  expect(result[0]).toEqual(theExpectedResult1); // Assert
  expect(result[result.length-1]).toEqual(theExpectedResult2); // Assert
});