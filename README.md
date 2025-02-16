# Unhandled Promise Rejection in Node.js

This repository demonstrates a common error in Node.js applications: unhandled promise rejections.  Unhandled rejections can lead to unexpected behavior and crashes. This example showcases the problem and provides a solution using the `process.on('unhandledRejection', ...)` event listener.

## Steps to Reproduce

1. Clone this repository.
2. Navigate to the directory.
3. Run `node unhandledRejectionBug.js`.
4. Observe the error message indicating an unhandled promise rejection.

## Solution

The provided `unhandledRejectionSolution.js` file demonstrates how to handle unhandled promise rejections gracefully using the `process.on` method.

This is crucial for maintaining application stability and providing informative error handling.