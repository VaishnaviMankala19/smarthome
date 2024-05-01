import React from 'react';
import './Full.css';
import Navbar from './Navbar';
import livingroom from "../images/livingroom.jpeg";
// import graph from '../images/graph.png';
export default function Full(){
    return(
        <>
        <Navbar/>
        <div className='container1'>
            <img src={livingroom}/>
            <div className='sidebuttontrans1'>
            <span class="material-symbols-outlined" id="first1">nest_remote_comfort_sensor</span>
            <span class="material-symbols-outlined">nest_thermostat_gen_3</span>
            <span class="material-symbols-outlined">nest_remote</span>
            <span class="material-symbols-outlined">nest_secure_alarm</span>
            </div>
            <div className='trans1'>
            <div className="trans-small-button1">
                <div className='circle1'></div>
                <div className='text1'>Living Room</div>
            </div>
            </div>
            <div className='left1'>
                <img src='https://i.scdn.co/image/ab67616d0000b273ba5db46f4b838ef6027e6f96'/>
            </div>
            <div className='middle1'>
                <div className='text1'>
                <p id='pp1'>Perfect</p>
                <p id='pp2'>Ed Sheeran</p>
                <div className='iconsd'>
                <span class="material-symbols-outlined" >chevron_left</span>
                <span class="material-symbols-outlined" >pause</span>
                <span class="material-symbols-outlined" >chevron_right</span>
                </div>
                <div className='rect'>
                    <div className='circle'></div>
                </div>
                </div>
                
            </div>
            <div className='right1'>
                <p className='first'>10:38</p>
                <p className='second'>Dec 17 2024</p>
            </div>
            <div className='cont2'>
            <span class="material-symbols-outlined" id='leff'>desktop_windows</span>
            <span class="material-symbols-outlined" id='righ'>toggle_on</span>
            <p className='X'>Xiaomi Smart Tv</p>
            <p className='T'>Turned On</p>
            <div className='smcon'>
                
            </div>
            <p className='smconp'>Controls</p>
            <div className='sss'>
                <span class="material-symbols-outlined" id="smcom1">brand_awareness</span>
                <span class="material-symbols-outlined" id="smcom3">volume_off</span>
                <span class="material-symbols-outlined" id="smcom2">motion_photos_paused</span>
                </div>
            </div>
            <div className='cont3'>
            <span class="material-symbols-outlined">mode_fan</span>
            <p className='para5'>Fan</p>
            <p className='text'>Speed:</p>
            <button className='minus'><span>-</span></button>
            <p className='kk'>4</p>
            <button className='plus'><span>+</span></button>
            </div>
        </div>
        <div className='aircondition'>
            <p className='one'>Air conditioning</p>
            <span class="material-symbols-outlined">wifi_tethering</span>
            <div className='dd'></div>
            <div className='stnt'>
            <p className='lef'>21 C</p>
            <div className='over'>
            <span class="material-symbols-outlined">mode_fan</span>
            <span class="material-symbols-outlined">toys_fan</span>
            <span class="material-symbols-outlined">mode_fan</span>
            </div>
            </div>
            <div className='ddd1'></div>
            <div className='ddd2'></div>
        </div>
        <div className='smartlight'>
            <p className='sp'>Smart Light</p>
            <span class="material-symbols-outlined">wifi_tethering</span>
            <div className='inverted-u'>
            <span class="material-symbols-outlined">clear_day</span>
            <span class="material-symbols-outlined">clear_day</span>
            </div>
            <div className='sper'>87%</div>
            <div className='snums'>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>+</div>
            </div>
            <div className='container'>
                
            </div>
        </div>
        </>
    )
}