import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch } from 'react-redux';
import { editDescription } from '../features/favorites/favoritesSlice';
import useMediaQuery from '@mui/material/useMediaQuery';

const ModalEditDescription = ({isOpen, handleClose, id}) => {
    const matches = useMediaQuery('(max-width:500px)');
    let width = 400;

    if (matches) {
      width = 230;
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: {width},
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

      const [description, setDescription] = useState('');
      const dispatch = useDispatch();

      const handleChange = (e) => {
        setDescription(e.target.value);
      }

      const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editDescription({id, description}));
        setDescription('');
        handleClose();
      }

      const handleConfirmClick = (id, description) => {
        dispatch(editDescription({id, description}))
        setDescription('');
        handleClose();
      }

      
  return (
    <>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit the description of the image
          </Typography>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Edit description...' value={description} onChange={handleChange}/>
            <Button size="small" onClick={() => handleConfirmClick(id, description)}>Confirm</Button>
          </form>
        </Box>
      </Modal>
    </>
  )
}

export default ModalEditDescription