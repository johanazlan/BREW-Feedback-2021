import React, { useState } from 'react';
import './event.css';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
//import './theme.js';

function EventOld(){

    return (
        <body>
            <div>
                <h1 className = "title">BREW FEEDBACK 2021</h1>
                <p className = "desc"> Click the link to ask questions and provide feedback</p>  
                <h3 style = {{textAlign: 'center', fontFamily: 'Poppins'}}>OR</h3> 
                <p className = "desc">Enter the code at <a href = "https://ahaslides.com/v2/">AhaSlides</a></p> 
                <br></br> 
            </div>

            <Container>
                <Grid container spacing = {3}>
                    {eventList.map(props => ( 
                        <Grid item key = {props.title} xs = {12} md = {6} lg = {4}>
                            <Card className = "Card" elevation = {3}>
                                <CardHeader
                                    titleTypographyProps = {{variant: 'h4'}}
                                    title = {props.title}
                                    subheader = {props.subheader}
                                    style = {{
                                        textAlign: 'center'
                                    }}
                                />
                                <CardContent style = {{textAlign: 'center'}}>
                                    <Typography>
                                        <p style = {{fontWeight: 'bold', fontFamily: 'Poppins'}}>{props.link}</p>
                                        <p style = {{fontFamily: 'Poppins'}}><b>Code:</b> {props.code}</p>
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>

        </body>
    );
}

const eventList = [
    {
        title: "SCENE SETTING", 
        subheader: "16 Dec, 3pm", // Always display on screen
       // date: new Date(), // Used to compare with current date time in order to change state
        link: <a href = "https://ahaslides.com/BREW1">SCENE SETTING</a>, 
        code: "BREW1"
    },
    {
        title: "TESLA", 
        subheader: "16 Dec, 4:30pm", 
        link: <a href = "https://ahaslides.com/BREW2">TESLA</a>, 
        code: "BREW2"
    }, 
    {
        title: "NETFLIX", 
        subheader: "16 Dec, 8:30pm", 
        link: <a href = "https://ahaslides.com/BREW3">NETFLIX</a>, 
        code: "BREW3"
    }, 
    {
        title: "GE", 
        subheader: "17 Dec, 9:30am", 
        link: <a href = "https://ahaslides.com/BREW4">GE</a>, 
        code: "BREW4"
    }, 
    {
        title: "AMAZON", 
        subheader: "17 Dec, 11:00am", 
        link: <a href = "https://ahaslides.com/BREW5">AMAZON</a>, 
        code: "BREW5"
    },
    {
        title: "General Feedback and Questions", 
        subheader: "16 - 18 Dec", 
        link: <a href = "https://ahaslides.com/BREW6">General Feedback and Questions</a>, 
        code: "BREW6"
    }

]

export default EventOld;