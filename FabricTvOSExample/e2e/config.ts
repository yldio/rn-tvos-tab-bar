import {RemoteOptions} from 'webdriverio';

const capabilities = {
  platformName: 'tvOS',
  'appium:automationName': 'XCUITest',
  'appium:platformVersion': '17.0',
  'appium:deviceName': 'Apple TV',
  'appium:app': process.env.APP_PATH,
};

export const wdOpts: RemoteOptions = {
  hostname: 'localhost',
  port: 4723,
  logLevel: 'info',
  capabilities,
};