import {remote} from 'webdriverio';

export type Driver = Awaited<ReturnType<typeof remote>>;
