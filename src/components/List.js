import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton } from '@material-ui/core';

// For my page!

let AppList = ({ deletePresent, presents }) => {
  console.log(presents);
  return (
    <List key={presents}>
      {presents.map((present) => {
        return (
          <ListItem button>
            <ListItemIcon>
              <CardGiftcardIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary={present.name} />
            <Button
              size="small"
              color="secondary"
              onClick={() => deletePresent(present.slug)}
            >
              <IconButton color="primary" aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </Button>
          </ListItem>
        );
      })}
    </List>
  );
};

export default AppList;
