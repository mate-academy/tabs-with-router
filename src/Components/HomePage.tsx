import { Navigate, useParams } from 'react-router-dom';

const HomePage = () => {
  const { param } = useParams();

  if (param === 'home') {
    return <Navigate to=".." />;
  }

  return <h1 className="title">Home page</h1>;
};

export default HomePage;
