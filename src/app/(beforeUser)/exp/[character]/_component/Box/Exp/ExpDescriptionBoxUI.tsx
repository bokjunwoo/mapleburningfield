import { Box, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import ExpDescriptionTextUI from '../../Typography/ExpDescriptionTextUI';
import ExpTotalExpTextUI from '../../Typography/ExpTotalExpTextUI';
import { EXP_CONTENT } from '@/app/constants/rate';
import useLevelProgress from '@/app/hooks/useLevelProgress';

type Props = {
  character: CharacterInfoBase;
};

const ExpDescriptionBoxUI = ({ character }: Props) => {
  const {
    araneRiverDailyQuestTotalExp,
    araneRiverWeeklyQuestTotalExp,
    grandisDailyQuestTotalExp,
    monsterParkTotalExp,
    epicDungeonTotalExp,
    VIPSaunaExp,
    azmothCanyonTotalExp,
    EXPCouponTotalExp,
  } = useLevelProgress(character.character_level, character.character_exp);

  return (
    <Box p={0.5}>
      <Typography mb={1} textAlign="center">
        일일 퀘스트 경험치
      </Typography>
      <ExpDescriptionTextUI
        title={EXP_CONTENT.ARANE_RIVER_DAILY_QUEST}
        characterLevel={character.character_level}
        exp={araneRiverDailyQuestTotalExp}
      />
      <ExpDescriptionTextUI
        title={EXP_CONTENT.GRANDIS_DAILY_QUEST}
        characterLevel={character.character_level}
        exp={grandisDailyQuestTotalExp}
      />
      <ExpDescriptionTextUI
        title={EXP_CONTENT.MONSTER_PARK}
        characterLevel={character.character_level}
        exp={monsterParkTotalExp}
      />
      <ExpTotalExpTextUI
        characterLevel={character.character_level}
        exp={
          araneRiverDailyQuestTotalExp +
          grandisDailyQuestTotalExp +
          monsterParkTotalExp
        }
      />
      <Box borderBottom={`1px dashed ${grey[600]}`} my={1} />

      <Typography mb={1} textAlign="center">
        주간 퀘스트 경험치
      </Typography>
      <ExpDescriptionTextUI
        title={EXP_CONTENT.ARANE_RIVER_WEEKLY_QUEST}
        characterLevel={character.character_level}
        exp={araneRiverWeeklyQuestTotalExp}
      />
      <ExpDescriptionTextUI
        title={EXP_CONTENT.EPIC_DUNGEON}
        characterLevel={character.character_level}
        exp={epicDungeonTotalExp}
      />
      <ExpDescriptionTextUI
        title={EXP_CONTENT.AZMOTH_CANYON}
        characterLevel={character.character_level}
        exp={azmothCanyonTotalExp}
      />
      <ExpTotalExpTextUI
        characterLevel={character.character_level}
        exp={
          araneRiverWeeklyQuestTotalExp +
          epicDungeonTotalExp +
          azmothCanyonTotalExp
        }
      />
      <Box borderBottom={`1px dashed ${grey[600]}`} my={1} />

      <Typography mb={1} textAlign="center">
        이벤트 경험치
      </Typography>
      <ExpDescriptionTextUI
        title={EXP_CONTENT.VIP_SAUNA}
        characterLevel={character.character_level}
        exp={VIPSaunaExp}
      />
      <ExpDescriptionTextUI
        title={EXP_CONTENT.EXP_COUPON}
        characterLevel={character.character_level}
        exp={EXPCouponTotalExp}
      />
      <ExpTotalExpTextUI
        characterLevel={character.character_level}
        exp={VIPSaunaExp + EXPCouponTotalExp}
      />
    </Box>
  );
};

export default ExpDescriptionBoxUI;
