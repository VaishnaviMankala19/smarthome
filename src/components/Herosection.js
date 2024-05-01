import React from 'react';
import './Herosection.css';
import herosectionimg from "../images/herosectionimg1.jpg";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="background-iframe">
        <iframe
          src='https://my.spline.design/threadsfeatureheaderanimation-dada77e857d4f710ba7fff1b8d4defb7/'
          frameborder='0'
          width='100%'
          height='100px'
        ></iframe>
      </div>
      <div className="left">
        
        <button className="small-button">In-Hands</button>
        <h1 className="big-text">Manage your <span className='extra'>Smart Home</span></h1>
        <p className="small-text">Be the next level of smart home management user</p>
        <button className="large-button">MANAGE</button>
      </div>
      <div className="right">
        <div className="image-container">
          <img className='image' src={herosectionimg} alt="Hero Section Image" />
          <div className="glass-card">
            <div className="card-content">
              {/* <p className='para'> <span class="material-symbols-outlined trans">dew_point</span> Air Conditioner</p> */}
              <p className='para'>Turned on <button className="turnoff-button">Turn Off</button></p>
              
              <div className="icon-row">
              <div className="material-symbols-outlined">ac_unit</div><div style={{ fontSize: '12px', backgroundColor: 'transparent', paddingLeft:'1px' , position:'relative',top:'5px',left:'0px',margin:'0px',paddingRight:'6px'}}>27</div>
              <div className="material-symbols-outlined">partly_cloudy_day</div><div style={{ fontSize: '12px', backgroundColor: 'transparent', paddingLeft:'1px' , position:'relative',top:'5px',left:'0px',margin:'0px',paddingRight:'6px'}}>21</div>
              <div className="material-symbols-outlined">thermometer_loss</div><div style={{ fontSize: '12px', backgroundColor: 'transparent', paddingLeft:'1px' , position:'relative',top:'5px',left:'0px',margin:'0px',paddingRight:'6px'}}>19</div>
              <div className="material-symbols-outlined">thermometer_gain</div><div style={{ fontSize: '12px', backgroundColor: 'transparent', paddingLeft:'1px' , position:'relative',top:'5px',left:'0px',margin:'0px',paddingRight:'6px'}}>17</div>
              </div>
              <p className='smallpara'>Weather outside seems to be cool</p>
              <button className="transparent-button">Automatic Mode</button>
            </div>
          </div>
          <div className="glass-card1">
            <div className="card-content1">
              <p className='para1'> <span class="material-symbols-outlined">music_note</span> A Thousand Years...<p className='smallpara1'>Playing</p><button className="turnoff-button">Turn Off</button></p>
            </div>
          </div>
          <div className="glass-card2">
            <div className="card-content1">
              <p className='para1'> <span class="material-symbols-outlined">lightbulb</span> Lights<p className='smallpara1'>Turned on</p><button className="turnoff-button">Turn Off</button></p>
            </div>
          </div>
          
          
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
