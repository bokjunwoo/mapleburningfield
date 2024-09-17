export const findCashItemEquipmentExpRate = (
  data: CharacterCashItemEquipment,
) => {
  const presets = [
    data.cash_item_equipment_base,
    data.cash_item_equipment_preset_1,
    data.cash_item_equipment_preset_2,
    data.cash_item_equipment_preset_3,
    data.additional_cash_item_equipment_base,
    data.additional_cash_item_equipment_preset_1,
    data.additional_cash_item_equipment_preset_2,
    data.additional_cash_item_equipment_preset_3,
  ];

  let boostRing = 0;
  let kinshipRing = 0;

  presets.forEach((preset) => {
    preset.forEach((item) => {
      if (item.cash_item_name.includes('경험치 부스트 링(15%)')) {
        boostRing = 15;
      }
      if (item.cash_item_name.includes('혈맹의 반지')) {
        kinshipRing = 10;
      }
    });
  });

  return { boostRing, kinshipRing };
};
