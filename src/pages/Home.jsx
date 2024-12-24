import AdmissionForm from "../components/AdmissionForm";
import DynamicTitle from "../components/DynamicTitle";
import PopularServices from "../components/PopularServices";
import Slider from "../components/Slider";


const Home = () => {
    return (
        <div>
            <DynamicTitle></DynamicTitle>
           <Slider></Slider>
           <PopularServices></PopularServices>
           <AdmissionForm></AdmissionForm>
        </div>
    );
};

export default Home;