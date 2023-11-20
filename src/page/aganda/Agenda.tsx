import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from '@fullcalendar/interaction';
import React from "react";
import "../default.css"

function Agenda() {

    return(
        <div style={styles.container} className={"background"}>
            <h1 style={styles.title}>AGENDA</h1>
            <div style={styles.calendar}>
                <FullCalendar
                    locale='fr'
                    plugins={[ timeGridPlugin , interactionPlugin ]}
                    initialView='timeGridWeek'
                    nowIndicator={true}
                    scrollTime={new Date().toTimeString()}
                    height={"100%"}
                    selectable={true}
                    editable={true}
                    events={
                        [
                            { // this object will be "parsed" into an Event Object
                                title: 'Scrim', // a property!
                                startRecur: "2023-11-19",
                                endRecur: "2023-11-20",
                                startTime: "15:00",
                                endTime: '16:00'
                            },
                            { // this object will be "parsed" into an Event Object
                                title: 'Scrim', // a property!
                                startRecur: "2023-11-19",
                                endRecur: "2023-11-20",
                                startTime: "18:00",
                                endTime: '19:00',
                                color: "red"
                            },
                            { // this object will be "parsed" into an Event Object
                                title: 'Scrim', // a property!
                                startRecur: "2023-11-19",
                                endRecur: "2023-11-20",
                                startTime: "18:00",
                                endTime: '20:00',
                                color: "red"
                            },
                            { // this object will be "parsed" into an Event Object
                                title: 'Scrim', // a property!
                                startRecur: "2023-11-22",
                                endRecur: "2023-11-23",
                                startTime: "17:00",
                                endTime: '18:00'
                            }
                        ]
                    }
                />
            </div>
        </div>
    )

}

const styles = {
    container:{
        padding: "15vh 15px"
    },
    calendar:{
        width: "90%",
        height: "60%",
        margin: "0px auto",
        backgroundColor: "white",
        borderRadius: "15px",
        padding: "10px"
    },
    title:{
        color: "white",
        fontSize: "3rem",
        fontFamily: "Title",
        textAlign: 'center' as const,
        padding: "3vh"
    }
}
export default Agenda
