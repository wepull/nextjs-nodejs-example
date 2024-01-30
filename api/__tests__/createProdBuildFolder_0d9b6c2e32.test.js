// Test generated by RoostGPT for test roost-test using AI Type Open AI and AI Model gpt-4


// Importing required modules
const { createProdBuildFolder } = require('../gulpfile.js');
const fs = require('fs-extra');
const log = require('fancy-log');
const path = require('path');

// Mocking fs and log modules
jest.mock('fs-extra');
jest.mock('fancy-log');

// Test suite for createProdBuildFolder function
describe('createProdBuildFolder function', () => {
  const dir = path.join(__dirname, '../prod_build');

  // Resetting all mocks before each test
  beforeEach(() => {
    jest.clearAllMocks();
  });

  // Test case 1: Folder does not exist
  test('should create the folder if it does not exist', async () => {
    fs.existsSync.mockReturnValue(false);

    await createProdBuildFolder();

    expect(log).toHaveBeenCalledWith(`Creating the folder if not exist  ${dir}`);
    expect(fs.existsSync).toHaveBeenCalledWith(dir);
    expect(fs.mkdirSync).toHaveBeenCalledWith(dir);
    expect(log).toHaveBeenCalledWith('📁  folder created:', dir);
  });

  // Test case 2: Folder already exists
  test('should not create the folder if it already exists', async () => {
    fs.existsSync.mockReturnValue(true);

    await createProdBuildFolder();

    expect(log).toHaveBeenCalledWith(`Creating the folder if not exist  ${dir}`);
    expect(fs.existsSync).toHaveBeenCalledWith(dir);
    expect(fs.mkdirSync).not.toHaveBeenCalled();
  });

  // Test case 3: Function returns a promise
  test('should return a promise', () => {
    const result = createProdBuildFolder();
    expect(result).toBeInstanceOf(Promise);
  });
});
