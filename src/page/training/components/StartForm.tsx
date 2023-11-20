import React from "react";

function StartForm(){
    return(
        <div style={styles.startContainer}>
            <p style={styles.midTitle}>Entrainement</p>
            <select style={styles.select}>
                <option>test</option>
            </select>
            <button style={styles.button}>Commencer</button>
        </div>
    )
}

const styles = {
    startContainer:{
        backgroundColor: "#182025",
        padding: "15px",
        borderRadius: "15px",
        width: "15%"
    },
    midTitle:{
        textAlign: "center" as const,
        padding: "10px",
        color: "white",
        fontFamily: "SwitzerBold"
    },
    select:{
        padding: "5px",
        width: "70%",
        margin: "0px auto",
        display: "block",
    },
    button: {
        display: "block",
        padding: "5px",
        backgroundColor: "transparent",
        color: "white",
        margin: "10px auto",
        border: "solid 2px #69D9D6",
        borderRadius: "5px",
        fontSize: "1rem"
    }
}

export default StartForm
