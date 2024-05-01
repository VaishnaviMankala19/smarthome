import React from 'react';
import './Rooms.css';
import livingroom from "../images/livingroom.jpeg";

export default function Rooms() {
    return (
        <>
        <div className="rooms">
            <h1>Rooms</h1>
        </div>
        <iframe src='https://my.spline.design/robotfollowcursorforlandingpage-6f49c9201d83171752a6b15de316a54b/' frameborder='0' width='450px' height='450px' className="robot" ></iframe>
        <div className="livingroom">
            <img src={livingroom}/>
        </div>
        <div className='text-on-image'>Living Room</div>
        <div className="rglass-card">
            <div className="rcard-content">
              <p className='rpara'> <span class="material-symbols-outlined rtrans">dew_point</span> Air Conditioner</p>
              <p className='rpara'>Turned on <button className="rturnoff-button">Turn Off</button></p>
              
              <div className="ricon-row">
              <span className="material-symbols-outlined r">ac_unit</span>
              <span className="material-symbols-outlined r">partly_cloudy_day</span>
              <span className="material-symbols-outlined r">thermometer_loss</span>
              <span className="material-symbols-outlined r">thermometer_gain</span>
              </div>
              <p className='rsmallpara'>Weather outside seems to be cool</p>
              <button className="rtransparent-button">Automatic Mode</button>
            </div>
          </div>
          <div className='card2'>
          <span className="material-symbols-outlined">desktop_windows</span>
          <p className='para5'>TV</p>
          <p className='para6'>Turned On</p>
          <span className="material-symbols-outlined" id="toggle">toggle_on</span>
          </div>
          <div className="rglass-card1">
            <div className="rcard-content1">
              <p className='rpara1'> <span class="material-symbols-outlined r">music_note</span> A Thousand Years...<p className='rsmallpara1'>playing</p><button className="rturnoff-button">Turn Off</button></p>
            </div>
            <div className="rglass-card2">
            <div className="rcard-content1">
              <p className='rpara1'> <span class="material-symbols-outlined r">lightbulb</span> Lights<p className='rsmallpara1'>Turned on</p><button className="rturnoff-button">Turn Off</button></p>
            </div>
          </div>
          </div>
          <div className='circularcard'>
            <span class="material-symbols-outlined">devices</span>
            <p className='oo'>4 devices</p>
          </div>
          
        </>
);
}
