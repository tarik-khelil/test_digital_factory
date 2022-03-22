import React from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Grid } from '@mui/material';
import Header from './header'
import ItuneCard from './ituneCard'
import { useSelector } from 'react-redux';

const Layout = props => {
    const { itunes } = useSelector(state => state.IR)

    return (
        <Container >
            < Header />
            <Box sx={{
                p: 4,
                width: '100%',
                height: '100vh',

            }} >
                <Grid container direction='row' spacing={2}>
                    {itunes.length > 0 && itunes.slice(0, 6).map((item, index) => (
                        <Grid item xs={2} key={index}>
                            <ItuneCard ituneData={item} />
                        </Grid>
                    )
                    )
                    }
                </Grid>

            </Box>
        </Container>
    );
};

Layout.propTypes = {

};

export default Layout;