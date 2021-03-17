/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

import { Testing } from './../Testing'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});

// Testing
it('Test Function Sum', () => {
  const resultTesting = Testing(5, 5)
  expect(resultTesting).toBe(10)
})
