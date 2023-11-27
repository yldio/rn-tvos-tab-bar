import {remote} from 'webdriverio';
import {wdOpts} from './config';
import {Driver} from './types';
import {moveTo} from './utils';

describe('TabBar', () => {
  let driver: Driver;

  beforeAll(async () => {
    driver = await remote(wdOpts);
  }, 60000);

  afterAll(async () => {
    await driver.deleteSession();
  });

  it('Should contain the TabBar', async () => {
    // Item 1 should be selected by default
    const selectedItemText = await driver.$(
      '//XCUIElementTypeStaticText[contains(@name, "Selected item")]',
    );
    expect(await selectedItemText.getAttribute('name')).toMatchInlineSnapshot(
      `"Selected item: Item 1"`,
    );

    // There should only be one item
    const tabBarItems = await driver.$$(
      "//XCUIElementTypeButton[contains(@name, 'Item')]",
    );
    expect(tabBarItems).toHaveLength(1);
    expect(await tabBarItems[0].getAttribute('name')).toBe('Item 1');

    // Select and press Add button
    const button = await driver.$('~Add an item');
    expect(selectedItemText.error).toBeUndefined();
    await moveTo(button.elementId, 'Down', driver);
    await button.click();

    const updatedTabBarItems = await driver.$$(
      "//XCUIElementTypeButton[contains(@name, 'Item')]",
    );
    expect(updatedTabBarItems).toHaveLength(2);
    const [firstItem, secondItem] = updatedTabBarItems;

    // Move focus to the Tab Bar
    await moveTo(firstItem.elementId, 'Up', driver);

    // Select second item
    await moveTo(secondItem.elementId, 'Right', driver);

    // Item 2 should be selected
    const updatedSelectedItemText = await driver.$(
      '//XCUIElementTypeStaticText[contains(@name, "Selected item")]',
    );
    expect(
      await updatedSelectedItemText.getAttribute('name'),
    ).toMatchInlineSnapshot(`"Selected item: Item 2"`);
  }, 60000);
});
