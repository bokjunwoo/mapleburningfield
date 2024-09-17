'use client';

import { Grid, Box, useMediaQuery, useTheme } from '@mui/material';
import { orange } from '@mui/material/colors';
import { useRecoilValue } from 'recoil';
import CharacterImageUI from '../Box/Character/common/CharacterImageUI';
import CharacterPanelUI from '../Box/Character/common/CharacterPanelUI';
import { characterInfoState } from '@/app/atoms/characterInfoState';

type Props = {
  isTodo: boolean;
};

const CharacterPanelGridUI = ({ isTodo }: Props) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));

  const character = useRecoilValue(characterInfoState);

  if (isMediumScreen) {
    return (
      <Grid container pt={isTodo ? 0 : 3}>
        <Grid item xs={12}>
          <CharacterImageUI
            src={character.character_image}
            name={character.character_name}
          />
        </Grid>

        <Grid item xs={12} sm={6} position="relative" height="inherit">
          <Box bottom={0} width="100%" p={2} pt={0} pb={isSmallScreen ? 0 : 2}>
            <CharacterPanelUI title="월드" info={character.world_name} />

            <CharacterPanelUI title="직업" info={character.character_class} />
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} position="relative" height="inherit">
          <Box bottom={0} width="100%" p={2} pt={0} pb={2}>
            <CharacterPanelUI title="Lv." info={character.character_level} />

            <CharacterPanelUI
              title="EXP."
              info={`${character.character_exp_rate}%`}
              color={orange[300]}
            />
          </Box>
        </Grid>
      </Grid>
    );
  }

  return (
    <Grid container pt={isTodo ? 0 : 3}>
      <Grid item xs={4} position="relative" height="inherit">
        <Box position="absolute" bottom={0} width="100%" p={2}>
          <CharacterPanelUI title="월드" info={character.world_name} />

          <CharacterPanelUI title="직업" info={character.character_class} />
        </Box>
      </Grid>

      <Grid item xs={4}>
        <CharacterImageUI
          src={character.character_image}
          name={character.character_name}
        />
      </Grid>

      <Grid item xs={4} position="relative" height="inherit">
        <Box position="absolute" bottom={0} width="100%" p={2}>
          <CharacterPanelUI title="Lv." info={character.character_level} />

          <CharacterPanelUI
            title="EXP."
            info={`${character.character_exp_rate}%`}
            color={orange[300]}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default CharacterPanelGridUI;
