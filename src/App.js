import React, {useEffect, useState} from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import {useDispatch} from 'react-redux'
import {getPosts} from './redux/posts/posts.actions.js'

import memories from './images/memories.png'
import Form from './components/form/form.component'
import Posts from './components/posts/posts.component'

import makeStyles from './app.styles.js'
import { useTheme } from '@material-ui/core/styles';

const App = () => {
    const [currentId, setCurrentId] = useState(null);

    const classes = makeStyles();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPosts())
    },[dispatch])

    return (
        <Container maxWidth='lg'>
            <AppBar className={classes.appBar} position='static' color='inherit'>
                <Typography className={classes.heading} variant='h2' align='center'>Diego Memories</Typography>
                <img className={classes.image} src={memories} alt='memories' height='60' ></img>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify='space-between' alignItems='stretch' spacing={3}  >
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId}/>
                            
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
};

export default App;