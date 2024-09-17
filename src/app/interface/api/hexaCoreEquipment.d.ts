interface LinkedSkill {
  hexa_skill_id: string;
}

interface HexaCoreEquipment {
  hexa_core_name: string;
  hexa_core_level: number;
  hexa_core_type: string;
  linked_skill: LinkedSkill[];
}

interface CharacterHexaCoreEquipment {
  date: string;
  character_hexa_core_equipment: HexaCoreEquipment[];
}
