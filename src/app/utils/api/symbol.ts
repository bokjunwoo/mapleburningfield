const findSymbolLevel = (data: CharacterSymbol) => {
  let symbolLevel = 0;

  data.symbol.forEach((symbol) => {
    if (symbol.symbol_name === '그랜드 어센틱심볼 : 탈라하트') {
      symbolLevel = symbol.symbol_level;
    }
  });

  return symbolLevel;
};

const calculateRates = (level: number) => {
  let expRate = 10;
  let itemDropRate = 5;
  let mesoDropRate = 5;

  expRate += (level - 1) * 4;
  itemDropRate += (level - 1) * 1;
  mesoDropRate += (level - 1) * 1;

  return {
    expRate,
    itemDropRate,
    mesoDropRate,
  };
};

export const findSymbolRates = (data: CharacterSymbol) => {
  const symbolLevel = findSymbolLevel(data);

  return symbolLevel === 0
    ? { expRate: 0, itemDropRate: 0, mesoDropRate: 0 }
    : calculateRates(symbolLevel);
};
