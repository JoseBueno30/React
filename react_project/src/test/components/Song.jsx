import React from "react";
import removeButton from '../../Resources/removeTask.png';



export default function Song(){
    return(
        
            <div className='song card'>
                <span class='border'><PlayButton/></span>
                <div class='container-fluid'>
                    <div class='row border'>
                        <span class='col '>Nombre</span>
                        <span class='col '>autor</span>
                        <span class='col '>album</span>
                        <span class='col-1'>mm:ss</span>
                        <span class='col-1 '>:</span>
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
