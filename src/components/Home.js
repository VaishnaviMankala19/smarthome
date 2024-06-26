import HeroSection from "./Herosection";
import Navbar from "./Navbar";
import Rooms from "./Rooms";
import Fav from './Fav';
import Add from './Add'
import { Navigate, useNavigate } from "react-router-dom";

export default function Home(){
    const navigate = useNavigate() ;
    const RoomPage = () => {
        navigate('/Full')
    }
    return(
        <>
        <Navbar/>
        <HeroSection/>
        <div onClick={RoomPage}>
        <Rooms/>
        <Fav />
        <Add />
        </div>
        </>
    )
}