import { useContext } from "react";
import AdmissionForm from "../components/AdmissionForm";
import DynamicTitle from "../components/DynamicTitle";
import PopularServices from "../components/PopularServices";
import Slider from "../components/Slider";
import { AuthContext } from "../providers/AuthProvider";


const Home = () => {
    const {isDark}=useContext(AuthContext)
    return (
        <div className={`${isDark? 'bg-black text-white':''}`}>
            
            <DynamicTitle></DynamicTitle>
           <Slider></Slider>
           <PopularServices></PopularServices>
           <AdmissionForm></AdmissionForm>
        </div>
    );
};

export default Home;