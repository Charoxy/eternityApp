import React from 'react';
import Navbar from "../components/navbar";
import "./default.css"


function Home(){
    return(
        <div className={"background"}>
            <h1 style={styles.title}>ETERNITYAPP</h1>
        </div>
    )

}

const styles = {
    title:{
        color: "white",
        fontSize: "6rem",
        fontFamily: "Title",
        textAlign: 'center' as const,
        paddingTop: "30vh"
    }
}

export default Home;
