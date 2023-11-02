import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/fetchMovies';
import { NoCast } from 'Error/NoCast';
import { List, Item, Img, Name, Character } from './Cast.styled';

export const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();
  const imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';
  
  useEffect(() => {
    getMovieCast(movieId).then(setCast);
  }, [movieId]);

  if (!cast) {
    return;
  }

  return (
    <List>
      {cast.length === 0 && <NoCast />}

      {cast.map(({ id, profile_path, name, character }) => (
        <Item key={id}>
          {profile_path ? (
        <Img src={imgBaseUrl.concat(profile_path)} alt="" />
      ) : (
        <Img src={'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'} alt="Placeholder" />
      )}
          <div>
            <Name>{name}</Name>
            <Character>{character}</Character>
          </div>
        </Item>
      ))}
    </List>
  );
};
