'use client';

import { Box, Grid } from '@mui/material';
import { grey } from '@mui/material/colors';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import AraneRiverQuest from '../List/Daily/AraneRiverQuest';
import GrandisQuestList from '../List/Daily/GrandisQuestList';
import MonsterPark from '../List/Daily/MonsterPark';
import EXPCoupon from '../List/Event/EXPCoupon';
import GoldenTomato from '../List/Event/GoldenTomato';
import VIPSauna from '../List/Event/VIPSauna';
import AraneRiverWeeklyQuest from '../List/Weekly/AraneRiverWeeklyQuest';
import AzmothCanyon from '../List/Weekly/AzmothCanyon';
import EpicDungeon from '../List/Weekly/EpicDungeon';
import ExtremePark from '../List/Weekly/ExtremePark';
import BannerTitle from '@/app/_component/Typography/BannerTitle';
import { characterInfoState } from '@/app/atoms/characterInfoState';

const ExpContentUI = () => {
  const [character, setCharacterInfo] = useRecoilState(characterInfoState);

  const characterLevel = character.character_level;
  const isHighLevelCharacter = characterLevel >= 260;

  useEffect(() => {
    setCharacterInfo(character);
  }, [character, setCharacterInfo]);

  return (
    <Box bgcolor={grey[300]} mt={2} p={1} borderRadius={1}>
      <BannerTitle text="일일컨텐츠" mb={0} />

      <Grid container spacing={1}>
        {isHighLevelCharacter ? (
          <>
            <Grid item xs={12} lg={4}>
              <GrandisQuestList characterLevel={characterLevel} />
            </Grid>
            <Grid item xs={12} lg={4}>
              <AraneRiverQuest characterLevel={characterLevel} />
            </Grid>
          </>
        ) : (
          <>
            <Grid item xs={12} lg={4}>
              <AraneRiverQuest characterLevel={characterLevel} />
            </Grid>
            <Grid item xs={12} lg={4}>
              <GrandisQuestList characterLevel={characterLevel} />
            </Grid>
          </>
        )}
        <Grid item xs={12} lg={4}>
          <MonsterPark characterLevel={characterLevel} />
        </Grid>
      </Grid>

      <Grid container spacing={1} mb={-0.5}>
        <Grid item xs={12}>
          <BannerTitle text="주간컨텐츠" mt={0.5} mb={0} />
          {isHighLevelCharacter ? (
            <Grid container spacing={1}>
              <Grid item xs={12} lg={4}>
                <EpicDungeon characterLevel={characterLevel} />
                <ExtremePark characterLevel={characterLevel} />
              </Grid>

              <Grid item xs={12} lg={4}>
                <AzmothCanyon characterLevel={characterLevel} />
              </Grid>

              <Grid item xs={12} lg={4}>
                <AraneRiverWeeklyQuest characterLevel={characterLevel} />
              </Grid>
            </Grid>
          ) : (
            <Grid container spacing={1}>
              <Grid item xs={12} lg={4}>
                <AraneRiverWeeklyQuest characterLevel={characterLevel} />
              </Grid>

              <Grid item xs={12} lg={4}>
                <EpicDungeon characterLevel={characterLevel} />
                <ExtremePark characterLevel={characterLevel} />
              </Grid>

              <Grid item xs={12} lg={4}>
                <AzmothCanyon characterLevel={characterLevel} />
              </Grid>
            </Grid>
          )}
        </Grid>
      </Grid>

      <Grid container spacing={1} mb={-0.5}>
        <Grid item xs={12}>
          <BannerTitle text="이벤트 컨텐츠" mt={0.5} mb={0} />
          <Grid container spacing={1}>
            <Grid item xs={12} lg={4}>
              <VIPSauna characterLevel={characterLevel} />
            </Grid>

            <Grid item xs={12} lg={4}>
              <EXPCoupon characterLevel={characterLevel} />
            </Grid>

            <Grid item xs={12} lg={4}>
              <GoldenTomato characterLevel={characterLevel} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ExpContentUI;
