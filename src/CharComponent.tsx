import styled from '@emotion/styled';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import React, { useEffect, useMemo, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { getSingleCharacter } from './api/characters';

type dataFromApi = {
  name: string;
  id: number | null;
  gender: string;
  image: string;
  created: string;
  location: {
    name: string;
  };
  episode: string[];
};

const CharComponent = () => {
  const [card, setCard] = useState<dataFromApi>({
    name: '',
    id: null,
    gender: '',
    image: '',
    created: '',
    location: {
      name: '',
    },
    episode: [],
  });
  const params = useParams();

  useEffect(() => {
    getSingleCharacter(params.charId).then((res) => {
      console.log(res);
      setCard(res);
    });
  }, [params.charId]);

  const CustomListItem = styled(ListItem)`
    background: #eeeeee;

    &:not(:last-child) {
      margin-bottom: 5px;
    }
  `;

  const StyledContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    padding: 20px 0;
  `;

  const memoChar = useMemo(() => {
    return (
      <StyledContainer maxWidth="sm">
        <NavLink style={{ textDecoration: 'none' }} to={'/api'}>
          <Button variant="contained">Go back</Button>
        </NavLink>

        <Card key={card.id} sx={{ width: '100%', maxWidth: 345 }}>
          <CardHeader title={card.name} subheader={card.created.slice(0, 10)} />
          <CardMedia component="img" height="194" image={card.image} alt={card.name} />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Location: {card.location.name}
            </Typography>
          </CardContent>
        </Card>

        <List>
          {card.episode.map((ep) => (
            <CustomListItem key={ep} disablePadding>
              <ListItemText primary={ep} />
            </CustomListItem>
          ))}
        </List>
      </StyledContainer>
    );
  }, [
    CustomListItem,
    StyledContainer,
    card.created,
    card.episode,
    card.id,
    card.image,
    card.location.name,
    card.name,
  ]);

  return <div>{card.name ? memoChar : 'Loadind...'}</div>;
};

export default CharComponent;
