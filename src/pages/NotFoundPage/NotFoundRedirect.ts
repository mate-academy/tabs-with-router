import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const NotFoundRedirect: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/not-found');
  }, []);

  return null;
};
