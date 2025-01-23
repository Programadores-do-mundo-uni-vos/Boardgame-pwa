import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import React from 'react';

interface RankingListProps {
  list: Array<any>
}

const RankingList: React.FC<RankingListProps> = ({ list }) => {
  return (
    <>
      <div className="p-4">
        <h2 className="text-lg font-bold mb-4">Ranking</h2>
        <List>
          {list.map((user) => (
            <ListItem key={user.position}>
              <ListItemAvatar>
                <Avatar alt={user.name} src={user.photo} />
              </ListItemAvatar>
              <ListItemText
                primary={`${user.position}. ${user.name}`}
                secondary={`${user.points} pontos`}
              />
            </ListItem>
          ))}
        </List>
      </div>
    </>
  );
}

export default RankingList;
