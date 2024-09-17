export const updateRateItem = ({
  rateItem,
  rateName,
  targetValue,
  setRate,
  setValue,
}: HandleRateChangeParams) => {
  const existingIndex = rateItem.findIndex((item) => item.label === rateName);

  const updatedValue = Number(targetValue);

  const updatedRate = [...rateItem];

  if (existingIndex !== -1) {
    updatedRate[existingIndex] = {
      label: rateName,
      value: updatedValue,
    };
  } else {
    updatedRate.push({ label: rateName, value: updatedValue });
  }

  setRate(updatedRate);
  setValue(targetValue);
};

export const handleRateChange = ({
  rateItem,
  rateName,
  targetValue,
  setRate,
  setValue,
}: HandleRateChangeParams) => {
  updateRateItem({ rateItem, rateName, targetValue, setRate, setValue });
};

export const handleRateInputChange = ({
  rateItem,
  rateName,
  targetValue,
  setValue,
  setRate,
  regex,
  maxAllowedValue,
}: HandleRateInputChangeParams) => {
  if (regex.test(targetValue)) {
    let updatedValue = targetValue;

    if (Number(updatedValue) > maxAllowedValue) {
      updatedValue = maxAllowedValue.toLocaleString();
    }

    updateRateItem({
      rateItem,
      rateName,
      targetValue: updatedValue,
      setRate,
      setValue,
    });
  }
};

export const handlePresetRateChange = ({
  rateItem,
  rateName,
  targetValue,
  setValue,
  setStoredValue,
}: HandlePresetRateChangeParams) => {
  const existingIndex = rateItem.findIndex((item) => item.label === rateName);
  const updatedRate = [...rateItem];

  if (existingIndex !== -1) {
    updatedRate[existingIndex] = {
      label: rateName,
      value: Number(targetValue),
    };
    setValue(targetValue);
    setStoredValue(updatedRate);
  } else {
    const newRateItem = [
      ...rateItem,
      { label: rateName, value: Number(targetValue) },
    ];
    setValue(targetValue);
    setStoredValue(newRateItem);
  }
};

export const handlePresetPotionRateChange = ({
  itemDropStoredValue,
  setItemDropStoredValue,
  mesoDropStoredValue,
  setMesoDropStoredValue,
  rateName,
  targetValue,
  setValue,
}: HandlePresetPotionRateChangeParams) => {
  updateRateItem({
    rateItem: itemDropStoredValue,
    rateName,
    targetValue,
    setRate: setItemDropStoredValue,
    setValue,
  });
  updateRateItem({
    rateItem: mesoDropStoredValue,
    rateName,
    targetValue,
    setRate: setMesoDropStoredValue,
    setValue,
  });
};

export const handlePotionRateSelectChange = ({
  rateItem,
  rateName,
  targetValue,
  setRate,
  setValue,
  syncSetState,
}: HandlePotionRateChangeParams) => {
  const updatedValue = Number(targetValue);

  updateRateItem({
    rateItem,
    rateName,
    targetValue,
    setRate,
    setValue,
  });

  syncSetState((prevState: SelectItem[]) => {
    const reverseExistingIndex = prevState.findIndex(
      (item) => item.label === rateName,
    );
    if (reverseExistingIndex !== -1) {
      const updatedReverseRate = [...prevState];
      updatedReverseRate[reverseExistingIndex] = {
        label: rateName,
        value: updatedValue,
      };
      return updatedReverseRate;
    }
    return [...prevState, { label: rateName, value: updatedValue }];
  });
};

export const handleSyncSetStateSelectChange = ({
  rateItem,
  rateName,
  targetValue,
  setRate,
  setValue,
  syncSetStates,
  syncItems,
  itemId,
}: HandleSyncSetStateSelectParams) => {
  updateRateItem({
    rateItem,
    rateName,
    targetValue,
    setRate,
    setValue,
  });

  syncSetStates.forEach((syncSetState, idx) => {
    const relatedRateOption = syncItems[idx];

    const selectedItem = relatedRateOption.find(
      (item) => item.id === itemId,
    ) as SelectItem;

    syncSetState((prevState: SelectItem[]) => {
      const reverseExistingIndex = prevState.findIndex(
        (item) => item.label === rateName,
      );
      if (reverseExistingIndex !== -1) {
        const updatedReverseRate = [...prevState];
        updatedReverseRate[reverseExistingIndex] = {
          label: rateName,
          value: selectedItem.value,
        };
        return updatedReverseRate;
      }
      return [...prevState, { label: rateName, value: selectedItem.value }];
    });
  });
};
