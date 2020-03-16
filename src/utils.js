export const isWinner = cells => {
  const a = cells.filter(id => id >= 0 && id <= 2);
  if (a.length === 3) {
    return true;
  }
  const b = cells.filter(id => id >= 3 && id <= 5);
  if (b.length === 3) {
    return true;
  }
  const c = cells.filter(id => id >= 6 && id <= 8);
  if (c.length === 3) {
    return true;
  }
  const d = cells.filter(id => id % 3 === 0);
  if (d.length === 3) {
    return true;
  }
  const e = cells.filter(id => id % 3 === 1);
  if (e.length === 3) {
    return true;
  }
  const f = cells.filter(id => id % 3 === 2);
  if (f.length === 3) {
    return true;
  }
  const g = cells.filter(id => id === 0 || id === 4 || id === 8);
  if (g.length === 3) {
    return true;
  }
  const h = cells.filter(id => id === 2 || id === 4 || id === 6);
  if (h.length === 3) {
    return true;
  }
  return false;
};

export const isFinished = tics => {
  const a = tics.filter(tic => tic === null);
  return a.length === 1;
};

export const getWinner = tics => {
  const xCells = [];
  const oCells = [];
  for (let i = 0; i < tics.length; i += 1) {
    if (tics[i] === 'X') {
      xCells.push(i);
    }
    if (tics[i] === 'O') {
      oCells.push(i);
    }
  }
  if (isWinner(xCells)) {
    return 'X';
  }
  if (isWinner(oCells)) {
    return 'O';
  }
  return null;
};
