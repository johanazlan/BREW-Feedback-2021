import React, { useEffect } from 'react';
import './event.css';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import moment from 'moment';
import { Helmet } from "react-helmet";

function Event2(){

    useEffect(() => {
      const interval = setInterval(() => {
      }, 1000);
      return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <Helmet>
                <meta charSet='utf-8'/>
                <title>BREW 2021</title>
                <link rel="canonical" href="https://brew2021.invokeisdata.com/"/>
                <meta name="description" content="BREW 2021 Feedback" />
            </Helmet>
        

        <body>
            <div>
                <h1 className = "title">BREW FEEDBACK 2021</h1>
                <p className = "desc"> Click the link to ask questions and provide feedback</p>  
                <h3 style = {{textAlign: 'center', fontFamily: 'Poppins'}}>OR</h3> 
                <p className = "desc">Enter the code at <a href = "https://ahaslides.com/v2/">AhaSlides</a></p> 
                <br></br> 
            </div>


            {/* Top Grid */}

            {/* eventList.filter(props => (moment(props.date).diff(moment().format('LLL')) === 0) || (moment(props.endDate) >= moment().format('LLL')) */}
            {/* props.date is the event start time 
                if (Event start time - current time) <= 0 && (current time <= end time )
                    then event ONGOING

                Ex:
                    ("December 15, 2021 10:15 AM" - "December 15, 2021 10:22 AM") && ("December 15, 2021 10:22 AM" - "December 15, 2021 10:25 AM") 
            */}
            <Container>
                <p style = {{fontFamily: 'Poppins', fontSize: 24, marginTop: 20}}>Ongoing</p>
                <Grid container spacing = {3}>
                    {eventList.filter(props => (moment(props.date).diff(moment().format('LLL')) <= 0) && (moment(props.endDate).diff(moment().format('LLL')) >= 0))
                              .map(props => (
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
                            ))
                    }       
                </Grid>
            </Container>

            {/* General Feedback and Questions */}
            <Container>
                <p style = {{fontFamily: 'Poppins', fontSize: 24, marginTop: 80}}>General Feedback and Questions</p>
                    <Grid container spacing = {3}>
                        <Grid item xs = {12} md = {6} lg = {4}>
                            <Card className = "Card" elevation = {3}>
                                <CardHeader
                                    titleTypographyProps = {{variant: 'h4'}}
                                    title = {"General Feedback and Questions"}
                                    subheader = {"16 - 18 Dec"}
                                    style = {{
                                        textAlign: 'center'
                                    }}
                                />
                                <CardContent style = {{textAlign: 'center'}}>
                                    <Typography>
                                        <p style = {{fontWeight: 'bold', fontFamily: 'Poppins'}}><a href = "https://ahaslides.com/BREW6">General Feedback and Questions</a></p>
                                        <p style = {{fontFamily: 'Poppins'}}><b>Code:</b> BREW6</p>
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>      
                </Grid>
            </Container>


            {/* Middle Grid 
                if event start time - current time > 0
                    event NOT STARTED
            
                Ex:
                    "December 15, 2021 10:15 AM" - "December 15, 2021 10:14 AM" 
            
            */}
            <Container>
                <p style = {{fontFamily: 'Poppins', fontSize: 24, marginTop: 80}}>Not Started</p>
                <Grid container spacing = {3}>
                    {eventList.filter(props => moment(props.date).diff(moment().format('LLL')) > 0) 
                              .map(props => (
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
                            ))
                    }       
                </Grid>
            </Container> 


            {/* BOTTOM GRID */}

            {/* props.date is the event start time 
                if (Event end time - current time) < 0 
                    then event COMPLETED

                Ex: 
                "December 15, 2021 10:21 AM" - "December 15, 2021 10:22 AM"
            */}
            <Container style = {{marginBottom: 80}}>
                <p style = {{fontFamily: 'Poppins', fontSize: 24, marginTop: 80}}>Completed</p>
                <Grid container spacing = {3}>
                    {eventList.filter(props => moment(props.endDate).diff(moment().format('LLL')) < 0)
                              .map(props => (
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
                            ))
                    }       
                </Grid>
            </Container>

            

        </body>
        </div>
    );
}

const eventList = [
    {
        title: "SCENE SETTING", 
        subheader: "16 Dec, 3pm", // Always display on screen
        date: "December 15, 2021 10:52 AM", // Used to compare with current date time in order to change state
        endDate: "December 15, 2021 10:57 AM",
        link: <a href = "https://ahaslides.com/BREW1">SCENE SETTING</a>, 
        code: "BREW1"
    },
    {
        title: "TESLA", 
        subheader: "16 Dec, 4:30pm", 
        date: "December 15, 2021 10:52 AM",
        endDate: "December 15, 2021 10:53 AM",
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
    }
]

export default Event2;