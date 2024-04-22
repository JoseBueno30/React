import React from "react";
import removeButton from '../../Resources/removeTask.png';



export default function Song(){
    return(
        
            <div className='song'>
                <span class=''><PlayButton/></span>
                <div class='container-fluid'>
                    <div class='row'>
                        <span class='col '>Nombre</span>
                        <span class='col '>autor</span>
                        <span class='col '>album</span>
                        <span class='col-1'>mm:ss</span>
                        <span class='col-1 border'>:</span>
                    </div>
                </div>
                
            </div>
    
    );
}

function PlayButton(){
    return(
        <div className="playButton">
            a
        </div>
    );
} 
