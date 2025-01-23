import { Fab, Tooltip,  } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import RankingList from './RankingList';
import HomeBottomNavigation from './HomeBottomNavigation';
import AddMatchModal from './AddMatchModal';
import { useState } from 'react';

function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  const rankingData = [
    { position: 10, name: 'John Doe', points: 1200, photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Dilma_Rousseff_-_foto_oficial_2011-01-09.jpg/800px-Dilma_Rousseff_-_foto_oficial_2011-01-09.jpg' },
    { position: 2, name: 'Jane Smith', points: 1100, photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Dilma_Rousseff_-_foto_oficial_2011-01-09.jpg/800px-Dilma_Rousseff_-_foto_oficial_2011-01-09.jpg' },
    { position: 5, name: 'Sam Wilson', points: 950, photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Dilma_Rousseff_-_foto_oficial_2011-01-09.jpg/800px-Dilma_Rousseff_-_foto_oficial_2011-01-09.jpg' },
    { position: 4, name: 'Anna Johnson', points: 900, photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Dilma_Rousseff_-_foto_oficial_2011-01-09.jpg/800px-Dilma_Rousseff_-_foto_oficial_2011-01-09.jpg' },
    { position: 8, name: 'Chris Lee', points: 850, photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Dilma_Rousseff_-_foto_oficial_2011-01-09.jpg/800px-Dilma_Rousseff_-_foto_oficial_2011-01-09.jpg' },
  ];

  const sortedRankingData = rankingData.sort((a, b) => a.position - b.position);
  
  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);
  
  return (
    <div className='h-screen relative'>
      <Tooltip placement="top-start" title="Adicionar partida" arrow>
        <Fab
          sx={{ position: 'absolute', bottom: 80, right: 16 }}
          color='primary'
          onClick={handleOpenModal}
        >
          <AddIcon />
        </Fab>
      </Tooltip>

      <RankingList list={sortedRankingData} />

      <HomeBottomNavigation />
      <AddMatchModal onClose={handleCloseModal}  isOpen={modalOpen} />

    </div>
  );
}

export default Home;
