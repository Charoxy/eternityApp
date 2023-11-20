import React from "react";
import "../default.css"
import StartForm from "./components/StartForm";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from '@fullcalendar/timegrid'

function Training(){

    return(
        <div className={"background"}>
            <div style={styles.container}>
                <StartForm/>
            </div>
        </div>
    )

}

const styles = {
    container:{
        padding: "15vh 20px",
        display: "flex",
    },
}

export default Training
