import React from "react";
import { FaEllipsisVertical, FaPlay } from "react-icons/fa6";


export default function Song(){
    return(
        
            <div className='song'>
                <span class=''><PlayButton/></span>
                <div class='container-fluid'>
                    <div class='row'>
                        <div class='col ms-3 d-flex flex-column flex-md-row justify-content-md-between align-items-md-center'>
                            <div class="name ">Nombre</div>
                            <div class="author ">autor</div>
                        </div>
                        <div class='col d-none d-md-flex justify-content-center  album'>album</div>
                        <div class='col-3 col-md-2 time'>mm:ss</div>
                        <div class='d-flex justify-content-center col-md-1 col-2 '><FaEllipsisVertical /></div>
                    </div>
                </div>
                
            </div>
    
    );
}

function PlayButton(){
    return(
        <div className="playContainer">
            <image></image>
            <div class="playButton"><FaPlay/></div>
        </div>
    );
} 
