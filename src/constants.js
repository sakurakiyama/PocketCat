export const ICONS = ['feed', 'love', 'poop'];
export const TICK_RATE = 3000;

export const getNextHungerTime = (clock) =>
  Math.floor(Math.random() * 3) + 8 + clock;

export const getNextDieTime = (clock) =>
  Math.floor(Math.random() * 3) + 4 + clock;

export const getNextPoopTime = (clock) =>
  Math.floor(Math.random() * 3) + 8 + clock;

export const getNextAttentionTime = (clock) =>
  Math.floor(Math.random() * 3) + 8 + clock;

export const getNextSleepTime = (clock) =>
  Math.floor(Math.random() * 3) + 6 + clock;
