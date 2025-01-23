import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';

const HomeBottomNavigation =  () => {
  return (
    <>
      <div>
        <BottomNavigation
          sx={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: '#1976D2',
          }}
          showLabels
        >
          <BottomNavigationAction
            label="Recents"
            icon={<RestoreIcon sx={{ color: 'white' }} />}
          />
          <BottomNavigationAction
            label="Favorites"
            icon={<FavoriteIcon sx={{ color: 'white' }} />}
          />
          <BottomNavigationAction
            label="Nearby"
            icon={<LocationOnIcon sx={{ color: 'white' }} />}
          />
        </BottomNavigation>
      </div>
    </>
  );
}

export default HomeBottomNavigation;
