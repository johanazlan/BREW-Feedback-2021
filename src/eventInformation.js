import React from 'react';
import { Link } from "react-router-dom";
import './event.css';

export default function EventInformation() {
    return (
        <div>
            {/* GO BACK BUTTON */}  
            <div style = {{flex: 1, justifyContent: "center", alignItems: "center", padding: 20}}>
                <Link style = {{textDecoration: 'none'}} to={"/"}>
                    <div style = {{width: 100, height: 30, backgroundColor: "#444444", textAlign: 'center', paddingTop: 10, borderRadius: 5, color: "white"}}>
                        Go back
                    </div>
                </Link>
            </div>

            <div className='container'>

                {/* TITLE */}
                <h1 className = "infoTitle">Event Information</h1>
                
                {/* 1.0 BUS ARRANGEMENT */}
                <h2 className='subheader'>1.0 BUS ARRANGEMENT</h2>
                <p className="text">Please be informed that there will be 2 buses (31 seating), please find your details and bus attendance as per attachment. 
                Those who are taking bus shall arrive at <b>8.00 am</b>, and the bus will depart at <b>8.30am.</b></p>
                <br></br>
                <p className="text">The bus will park nearby <b>RHB Bank.</b></p>
                <br></br>
                <p className="text"><b>Rep Bus 1: Ain</b></p>
                <p className="text"><b>Rep Bus 2: Lukman</b></p>
                <br></br>
                <p className="text">Those who are going by own car, may proceed your journey to <b>Jen, Pacific Harbour, Johor.</b></p>
                <br></br>
                <p className="text">The event will start at <b>3:00 pm</b>. Please be sharp!</p>

                {/* 2.0 PARKING */}
                <h2 className='subheader'>2.0 parking</h2>
                <p className="text">You may park your car at the <b>basement parking (B1,B2), FOC.</b></p>

                {/* 3.0 ARRIVING */}
                <h2 className='subheader'>3.0 ARRIVING</h2>
                <p className="text">Once you have arrived at the Hotel, please proceed to <b>Iskandar Ballroom (Level 3a)</b> to put your luggage at the back of the hall (Bag Tag will be distributed to name and tag your bag).</p>
                <p className="text">There will be free flow of Tea, Coffee, and drinks at the ballroom.</p>
                <br></br>
                <p className="text">Next, please proceed to <b>Harbour Cafe (L1)</b> for Lunch.</p>

                {/* 4.0 ROOM ARRANGEMENTS */}
                <h2 className='subheader'>4.0 ROOM ARRANGEMENTS</h2>
                <p className="text">The room will be available <b>after 3.00 pm</b>, and the keys will be distributed at the <b>registration table (at the ballroom).</b></p>
                <br></br>
                <p className="text">The room for the Directors and speakers will be ready before lunch.</p>

                {/* 5.0 OTHER FACILITIES & ENDING*/}
                <h2 className='subheader'>5.0 OTHER FACILITIES</h2>
                <p className="text">a. Swimming Pool is at level 3a (11.00 am - 7.00 pm). No SOP</p>
                <p className="text">b. Gym is at Level 3a (11.00 am -7.00 pm). Free for staying in customer. Please bring along your room card for access.</p>
                <p className="text">c. Surau (Level 3a)</p>
                <p className="text">d. Toilet (Level 3a)</p>
                <br></br>

                <p style = {{fontWeight:500, fontFamily: "Poppins", marginBottom: 50, fontSize: 18}}><b><i>safe journey and happy BREWing! </i></b></p>

            </div>

        </div>
    );
}