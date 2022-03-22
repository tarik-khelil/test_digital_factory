import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import { useSelector } from 'react-redux';
import { DialogActions, DialogContent, DialogContentText, Stack } from '@mui/material';
import MusicNoteIcon from '@mui/icons-material/MusicNote';


export function Popup(props) {
    const { myShoppingCar } = useSelector(state => state.IR)
    const { open, onClose } = props;

    const calculateTotalPrice = () => {
        let total = 0
        myShoppingCar.forEach(({ trackPrice }) => {
            return total += trackPrice
        });
        return total
    }
    return (

        <Dialog
            open={open}
            onClose={onClose}

            aria-labelledby="draggable-dialog-title"
        >
            <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                Mon Panier
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {myShoppingCar.map((item, index) =>
                        <Stack key={index} direction='row' justifyContent="space-between">
                            <Stack direction='row' spacing={2}>
                                <MusicNoteIcon />
                                <Typography>{item.trackName}</Typography>
                            </Stack>
                            <Typography>{`${item.trackPrice} DZ`}</Typography>

                        </Stack>
                    )}

                    <Stack pt={5} direction="row" justifyContent="space-between">
                        <Typography sx={{ fontWeight: "700" }}>Totale</Typography>
                        <Typography sx={{ fontWeight: "700" }}>{calculateTotalPrice()}&nbsp;DZ</Typography>
                    </Stack>

                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button color="error" autoFocus onClick={onClose}>
                    Fermer
                </Button>
                <Button onClick={onClose} color="success">Acheter</Button>
            </DialogActions>
        </Dialog>
    );
}




