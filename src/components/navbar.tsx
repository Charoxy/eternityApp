import React from 'react';
import {Link, NavLink} from "react-router-dom";

function Navbar() {
    return (
         <nav style={styles.containNav}>
             <div style={styles.containLink}>
                 <NavLink style={styles.link} to={"/"}>Acceuil</NavLink>
                 <NavLink style={styles.link} to={"/training"}>Entrainement</NavLink>
                 <NavLink style={styles.link} to={"/aganda"}>Agenda</NavLink>
             </div>
         </nav>
    )
}

const styles = {
    containNav: {
        padding: "15px",
        position: "fixed" as const,
        width: "100%",
        borderBottom: "solid #69D9D6 2px"
    },
    containLink: {
        display: "flex",
        justifyContent: "center",
        gap: 10,
    },
    link:{
        fontFamily: "SwitzerLight",
        textDecoration: 'none',
        color: "white",
        fontSize: "1.1rem"
    }
}
export default Navbar
