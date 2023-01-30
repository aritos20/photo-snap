import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch } from 'react-redux';
import { editDescription } from '../features/favorites/favoritesSlice';

const ModalEditDescription = ({isOpen, handleClose, id}) => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
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
      }

      const handleConfirmClick = (id, description) => {
        dispatch(editDescription({id, description}))
        setDescription('');
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
            Text in a modal
          </Typography>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Edit description...' value={description} onChange={handleChange}/>
          </form>
          <Button size="small" onClick={() => handleConfirmClick(id, description)}>Confirm</Button>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </>
  )
}

export default ModalEditDescription