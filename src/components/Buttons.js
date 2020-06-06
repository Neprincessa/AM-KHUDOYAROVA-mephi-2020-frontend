import React from 'react';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton } from '@material-ui/core';
const style = {
  marginRight: 20,
};

export const AddButtons = () => {
  return (
    <div style={{ marginBottom: 40 }}>
      <Button label="Primary" primary={true} style={style} color="secondary">
        Add present
        <IconButton color="primary" aria-label="add to shopping cart">
          <AddShoppingCartIcon />
        </IconButton>
      </Button>
      <Button label="Primary" primary={true} style={style} color="secondary">
        Delete present
        <IconButton aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </Button>
    </div>
  );
  //   return <div style={{ marginBottom: 40 }}>dfdfdfdfd</div>;
};

// export default AddButtons;
