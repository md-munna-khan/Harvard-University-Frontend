import { useContext} from "react";

import DynamicTitle from "../components/DynamicTitle";
import PopularServices from "../components/PopularServices";
import Slider from "../components/Slider";
import { AuthContext } from "../providers/AuthProvider";
import VarsityPrograms from "../extraSection/VarsityPrograms";
import SubsCription from "../extraSection/SubsCription";
import OnlineLearning from "../components/OnlineLearning";



const Home = () => {
    const {isDark}=useContext(AuthContext)
    
    return (
        <div className={`${isDark? 'bg-gray-800 space-y-4 container  mx-auto text-white':''}`}>
            
            <DynamicTitle></DynamicTitle>
        <Slider></Slider>
          <PopularServices></PopularServices>
       <VarsityPrograms></VarsityPrograms>
       <OnlineLearning></OnlineLearning>
        <SubsCription></SubsCription>
       
        </div>
    );
};

export default Home;