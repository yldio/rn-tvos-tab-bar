import type {JestConfigWithTsJest} from 'ts-jest';
import {defaults as tsjPreset} from 'ts-jest/presets';

const jestConfig: JestConfigWithTsJest = {
  ...tsjPreset,
  moduleFileExtensions: ['ts', 'js'],
};

export default jestConfig;
