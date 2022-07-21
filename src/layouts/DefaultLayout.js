import { Box, Container, Grid } from '@mui/material';
import React from 'react';
import Menu, { MenuMobile } from './Menu';

function DefaultLayout(props) {

    

    return (
        <div className="default-layout">
            <Grid container>
                {window.innerWidth > 600 ? 
                    <Grid item xs={12} md={2} className="menu-bar">
                        <Box 
                            sx={{ height: '40px', backgroundColor: 'blue' }}>
                        </Box>
                        <Menu />
                    </Grid>
                : ''}
                <Grid item xs={12} md={10} className="content">
                    <Box sx={{ height: '40px', backgroundColor: '#CCC' }}>
                        {window.innerWidth <= 600 ? <MenuMobile /> : ''}
                    </Box>
                    <Box sx={{ padding: '20px' }}>
                        {props.children}    
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
}

export default DefaultLayout;