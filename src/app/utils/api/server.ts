export const findEventWorld = (data: CharacterInfoBase) => {
  const isEventWorld =
    data.world_name === '챌린저스' || data.world_name === '챌린저스2';
  return isEventWorld;
};
