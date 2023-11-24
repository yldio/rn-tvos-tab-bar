import {Driver} from './types';

export async function moveTo(
  targetId: string,
  direction: 'Up' | 'Down' | 'Left' | 'Right',
  driver: Driver,
  maxSteps = 10,
) {
  let i = 0;
  while (
    i < maxSteps &&
    ((await driver.getActiveElement()) as any).ELEMENT !== targetId
  ) {
    await driver.execute('mobile: pressButton', {name: direction});
    i++;
  }
  if (i === maxSteps) {
    throw new Error(
      `Element with id ${targetId} could not be reached in ${maxSteps} steps using direction ${direction}`,
    );
  }
}
