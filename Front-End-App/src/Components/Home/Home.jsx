import './Home.css';
import { Box, Button } from '@chakra-ui/core';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <h5>Fran Dev 99</h5>
        <Box>
          <Link to="/iniciar-session">
            <Button colorScheme="teal" variant="outline" m="10px">
              Iniciar Session
            </Button>
          </Link>
          <Link to="/registrarme">
            <Button colorScheme="teal" variant="outline" m="10px">
              Registrarme
            </Button>
          </Link>
        </Box>
      </header>
    </div>
  );
}

export default Home;
