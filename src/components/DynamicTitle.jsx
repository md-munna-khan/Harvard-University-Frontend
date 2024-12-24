

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const DynamicTitle = () => {
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname;
        let title = 'Abroad University';
        if (path === '/') {
            title = "Home / Abroad University";
        } else if (path === '/login') {
            title = 'Login /Abroad University';
        } else if (path === '/register') {
            title = "Register / Abroad University";
        } else if (path === '/all-services') {
            title = 'All-Services';
        } else if (path === '/manage-services') {
            title = "Manage-Services ";
        } else if (path === '/booked-services') {
            title = "Booked-Services ";
        }else if(path=== '/service-to-do'){
            title= 'service-To-Do'
        }else if(path=== '/add-service')[
            title='Add Services'
        ]
       
        
        document.title = title;
    }, [location.pathname]);

    return null;
};

export default DynamicTitle;