export const ICONS = ['feed', 'love', 'poop'];
export const TICK_RATE = 3000;

export const getNextHungerTime = (clock: number) =>
  Math.floor(Math.random() * 3) + 8 + clock;

export const getNextDieTime = (clock: number) =>
  Math.floor(Math.random() * 3) + 4 + clock;

export const getNextPoopTime = (clock: number) =>
  Math.floor(Math.random() * 3) + 8 + clock;

export const getNextAttentionTime = (clock: number) =>
  Math.floor(Math.random() * 3) + 8 + clock;

export const getNextSleepTime = (clock: number) =>
  Math.floor(Math.random() * 3) + 6 + clock;
