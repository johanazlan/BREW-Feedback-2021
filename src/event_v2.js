import React, { useState } from 'react';
import './event.css';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
//import './theme.js';
import moment from 'moment';

function Event2(){

    let status = false;
    let newList;

    return (
        <body>
            {/* {eventList.map(props)} */}
            <div>
                <h1 className = "title">BREW FEEDBACK 2021</h1>
                <p className = "desc"> Click the link to ask questions and provide feedback</p>  
                <h3 style = {{textAlign: 'center', fontFamily: 'Poppins'}}>OR</h3> 
                <p className = "desc">Enter the code at <a href = "https://ahaslides.com/v2/">AhaSlides</a></p> 
                <br></br> 
            </div>

            {/* Top Grid */}
            <Container>
            <p style = {{fontFamily: 'Poppins', fontSize: 24, marginTop: 20}}>Ongoing</p>
                {newList = eventList.filter(props => props.date - moment().format('LLL') === 0) &&
                    <Grid container spacing = {3}>
                        {newList.map(props => ( 
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
                }
            </Container>

            {/* Middle Grid */}
            <Container>
            <p style = {{fontFamily: 'Poppins', fontSize: 24, marginTop: 50}}>Not Started</p>
                {newList = eventList.filter(props => props.date - moment().format('LLL') < 0) &&
                    <Grid container spacing = {3}>
                        {newList.map(props => ( 
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
                }
            </Container>

            <Container>
            <p style = {{fontFamily: 'Poppins', fontSize: 24, marginTop: 50}}>Completed</p>
                {newList = eventList.filter(props => props.date - moment().format('LLL') > 0) && 
                    <Grid container spacing = {3}>
                        {newList.map(props => ( 
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
                }
            </Container>
        </body>
    );
}

const dates = ["December 16, 2021 3:00 PM", "December 16, 2021 4:30 PM", "December 16, 2021 8:30 PM", 
                "December 17, 2021 9:30 AM", "December 17, 2021 11:00 AM"]

const eventList = [
    {
        title: "SCENE SETTING", 
        subheader: "16 Dec, 3pm", // Always display on screen
        date: "December 16, 2021 3:00 PM", // Used to compare with current date time in order to change state
        link: <a href = "https://ahaslides.com/BREW1">SCENE SETTING</a>, 
        code: "BREW1"
    },
    {
        title: "TESLA", 
        subheader: "16 Dec, 4:30pm", 
        date: "December 16, 2021 4:30 PM",
        link: <a href = "https://ahaslides.com/BREW2">TESLA</a>, 
        code: "BREW2"
    }, 
    {
        title: "NETFLIX", 
        subheader: "16 Dec, 8:30pm", 
        date: "December 16, 2021 8:30 PM",
        link: <a href = "https://ahaslides.com/BREW3">NETFLIX</a>, 
        code: "BREW3"
    }, 
    {
        title: "GE", 
        subheader: "17 Dec, 9:30am", 
        date: "December 17, 2021 9:30 AM",
        link: <a href = "https://ahaslides.com/BREW4">GE</a>, 
        code: "BREW4"
    }, 
    {
        title: "AMAZON", 
        subheader: "17 Dec, 11:00am", 
        date: "December 17, 2021 11:00 AM",
        link: <a href = "https://ahaslides.com/BREW5">AMAZON</a>, 
        code: "BREW5"
    },

    // Dont need date so not sure how to deal with it
    // {
    //     title: "General Feedback and Questions", 
    //     subheader: "16 - 18 Dec", 
    //     date: ,
    //     link: <a href = "https://ahaslides.com/BREW6">General Feedback and Questions</a>, 
    //     code: "BREW6"
    // }

]

export default Event2;