import React, { useEffect, useState, useMemo } from 'react';
import { getCharacter } from './api/characters';
import { styled } from '@mui/material/styles';
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Chip,
  Avatar,
  IconButton,
  Typography,
  CssBaseline,
} from '@mui/material';
import { red } from '@mui/material/colors';
import InfoIcon from '@mui/icons-material/Info';
import { NavLink } from 'react-router-dom';

const CustomCard = styled(Card)`
  & .MuiCardHeader-root {
    background: rgb(147, 247, 255);
    background: linear-gradient(
      188deg,
      rgba(147, 247, 255, 0.7372198879551821) 0%,
      rgba(255, 255, 255, 1) 80%
    );
  }
  & .MuiCardContent-root {
    background: rgb(255, 255, 255);
    background: linear-gradient(
      188deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(147, 247, 255, 0.7372198879551821) 60%
    );
  }

  & .MuiTypography-root.MuiCardHeader-title {
  }
`;

type dataFromApi = {
  name: string;
  id: number;
  gender: string;
  image: string;
  created: string;
  status: string;
  location: {
    name: string;
  };
};

enum SwitchReturned {
  Success = 'success',
  Error = 'error',
  Default = 'default',
  Primary = 'primary',
  Info = 'info',
  Warning = 'warning',
  Secondary = 'secondary',
}

function setColor(
  status: string,
):
  | SwitchReturned.Success
  | SwitchReturned.Error
  | SwitchReturned.Default
  | SwitchReturned.Secondary
  | SwitchReturned.Primary
  | SwitchReturned.Info
  | SwitchReturned.Warning
  | undefined {
  switch (status) {
    case 'Alive':
      return SwitchReturned.Success;
    case 'Dead':
      return SwitchReturned.Error;
    default:
      return SwitchReturned.Info;
  }
}

export const FunctionComponent1: React.FC = () => {
  const [cards, setCards] = useState<dataFromApi[]>([]);

  useEffect(() => {
    getCharacter().then((res) => {
      console.log(res);
      setCards(res.results);
    });
  }, []);

  const memoCards = useMemo(() => {
    return cards.map((card) => {
      return (
        <CustomCard key={card.id} sx={{ width: '100%', maxWidth: 345 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                {card.name.slice(0, 3)}
              </Avatar>
            }
            action={
              <NavLink to={`/api/${card.id}`}>
                <IconButton aria-label="settings">
                  <InfoIcon />
                </IconButton>
              </NavLink>
            }
            title={card.name}
            subheader={card.created.slice(0, 10)}
          />
          <CardMedia component="img" height="194" image={card.image} alt={card.name} />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Location: {card.location.name}
            </Typography>
            <Chip label={card.status} color={setColor(card.status)} />
          </CardContent>
        </CustomCard>
      );
    });
  }, [cards]);

  return (
    <CssBaseline>
      {cards.length ? (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 20,
            padding: '20px 0',
          }}
        >
          {memoCards}
        </div>
      ) : (
        'No cards available...'
      )}
    </CssBaseline>
  );
};

export default FunctionComponent1;
