import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import isPropValid from '@emotion/is-prop-valid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea, CardActions, Container } from '@mui/material';

const containerStyle = props =>
  css`
    color: ${props.color};
    display: ${props.display};
    flexDirection: ${props.flexDirection};
    fontSize: ${props.fontSize};
`

const buttonStyle = props => css`
  color: ${props.color};
  type: button;
  fontSize: ${props.fontSize};
  margin: ${props.margin};
  backgroundColor: ${props.backgroundColor};
`
const Button = styled.div`
  ${buttonStyle};
`
const OuterContainer = styled.div`
  ${containerStyle};
`

export const MainPage = () => {
    //
    //
    //TODO: Fill in image tags(Card Media) ad well as feed text to "Typography" tag
    //TODO:                               do this via API Functions making the calls
    return(
      <OuterContainer color="white" display="flex" flexDirection="coloumn" fontSize="xL">
        <Card variant="outlined" sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="/images"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Daily Ani-News
              </Typography>
              <Typography variant="body2" color="text.secondary">
                - Daily Ani-News - , Brought to you by ...
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button color='white' backgroundColor='black'>My List</Button>
          </CardActions>
        </Card>
        <Card variant="outlined" sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image=""
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Joke of the Day
              </Typography>
              <Typography variant="body2" color="text.secondary">
                -Joke- , Joke of the Day brought to you by ...
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <div>
          More Title Content to come!
        </div>
      </OuterContainer>
    );
};