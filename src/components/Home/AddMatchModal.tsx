import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

interface AddMatchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddMatchModal: React.FC<AddMatchModalProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Adicionar Nova Partida</DialogTitle>
      <DialogContent>
        <p>Insira as informações da nova partida aqui.</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="warning">
          Cancelar
        </Button>
        <Button onClick={onClose} color="primary">
          Confirmar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddMatchModal;
