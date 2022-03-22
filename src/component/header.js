import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Divider, IconButton, InputBase, Paper, Stack, SvgIcon } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { ReactComponent as Logo } from '../assets/logo1.svg';
import * as action from '../store/actions';
import { useDispatch } from 'react-redux';
import { Popup } from './popup'

const Header = props => {

    const [searchValue, setsearchValue] = useState('');
    const [openPopup, setopenPopup] = useState(false);

    const dispatch = useDispatch();

    const popupControl = () => {
        setopenPopup(currentState => !currentState)
    }
    const onSearch = () => {
        dispatch(action.fetchItunes(searchValue))
    }

    return (
        <Stack sx={{ height: "80px", width: '100 %' }} direction='row' justifyContent='space-between' alignItems='center' >
            <div>
                {/* <img src={logo} alt='logo' /> */}
                <SvgIcon sx={{ fontSize: '24px', width: "100px" }} component={Logo} inheritViewBox />

            </div>
            <Stack direction='row' justifyContent='space-between' spacing={2}>
                <Paper
                    component="form"
                    sx={{ borderRadius: "50px", p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                >
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search"
                        inputProps={{ 'aria-label': 'search ' }}
                        value={searchValue}
                        onChange={(e) => setsearchValue(e.target.value)}
                    />
                    <IconButton onClick={() => { setsearchValue(''); onSearch() }} color="primary" sx={{ p: '10px' }} aria-label="directions">
                        <DirectionsIcon />
                    </IconButton>
                    <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                    <IconButton onClick={onSearch} type="button" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Paper>
                <IconButton type="button" onClick={popupControl} sx={{ p: '10px' }} aria-label="shop">
                    <ShoppingCartIcon />
                </IconButton>

                {openPopup && < Popup open={openPopup} onClose={() => popupControl()} />}

            </Stack>
        </Stack >

    );
};

Header.propTypes = {

};

export default Header;