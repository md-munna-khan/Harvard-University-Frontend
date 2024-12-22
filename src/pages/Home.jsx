import AdmissionForm from "../components/AdmissionForm";
import PopularServices from "../components/PopularServices";
import Slider from "../components/Slider";


const Home = () => {
    return (
        <div>
           <Slider></Slider>
           <PopularServices></PopularServices>
           <AdmissionForm></AdmissionForm>
        </div>
    );
};

export default Home;