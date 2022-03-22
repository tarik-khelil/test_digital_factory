import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Paper, Stack } from '@mui/material';
import { useDispatch } from 'react-redux';
import * as action from "../store/actions";

const ItuneCard = ({ ituneData }, ...props) => {
    const [addBtn, setAddBtn] = useState(true);
    useState()
    const dispatch = useDispatch()

    const manageMyShoppingCar = () => {
        if (addBtn) {
            dispatch(action.addToMyShopppingCar(ituneData))
            setAddBtn(false);
        } else {
            dispatch(action.removeFromMyShoopungCar(ituneData.artistId));
            setAddBtn(true);
        }
    }

    return (
        <Paper evaluation={4}>
            <Card sx={{ maxWidth: 300, height: "260px" }}>
                <CardMedia

                    component="img"
                    alt="green iguana"
                    height="100px"
                    width="100px"
                    image={ituneData.artworkUrl100}
                />
                <CardContent sx={{ maxHeigth: '100px', Heigth: "100px" }}>
                    <Stack direction="column" spacing={2}>
                        <Typography style={{
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            width: '160px',
                            height: '1.2em',
                            whiteSpace: 'nowrap'
                        }}

                            component="div">
                            {ituneData.collectionName}
                        </Typography>
                        <Typography
                            style={{
                                textOverflow: "ellipsis",
                                overflow: "hidden",
                                width: '160px',
                                height: '1.2em',
                                whiteSpace: 'nowrap'
                            }}
                            color="text.secondary">
                            {ituneData.trackName}
                        </Typography>
                        <Typography
                            style={{
                                textOverflow: "ellipsis",
                                overflow: "hidden",
                                width: '160px',
                                height: '1.2em',
                                whiteSpace: 'nowrap'
                            }}
                            color="text.secondary">
                            {ituneData.artistName}
                        </Typography>
                    </Stack>
                </CardContent>
                <CardActions>
                    <Button type="button"
                        onClick={manageMyShoppingCar}
                        size="small"
                        color={addBtn ? 'primary' : 'error'}>{addBtn ? 'Ajouter' : 'Supprimer'}</Button>
                </CardActions>
            </Card>
        </Paper >
    );
};

ItuneCard.propTypes = {
    ituneData: PropTypes.any.isRequired

};

export default ItuneCard;



