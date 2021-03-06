const EventEmitter = require('events');
const QUnitAdapter = require('./lib/adapters/QUnitAdapter.js');
const JasmineAdapter = require('./lib/adapters/JasmineAdapter.js');
const MochaAdapter = require('./lib/adapters/MochaAdapter.js');
const TapReporter = require('./lib/reporters/TapReporter.js');
const ConsoleReporter = require('./lib/reporters/ConsoleReporter.js');
const { Assertion, TestStart, TestEnd, SuiteStart, SuiteEnd } = require('./lib/Data.js');
const {
  createSuiteStart,
  createTestStart,
  createTestEnd,
  createSuiteEnd
} = require('./lib/helpers.js');
const { autoRegister } = require('./lib/auto.js');

module.exports = {
  QUnitAdapter,
  JasmineAdapter,
  MochaAdapter,
  TapReporter,
  ConsoleReporter,
  Assertion,
  TestStart,
  TestEnd,
  SuiteStart,
  SuiteEnd,
  EventEmitter,
  createSuiteStart,
  createTestStart,
  createTestEnd,
  createSuiteEnd,
  autoRegister
};
