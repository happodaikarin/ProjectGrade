// src/Analytics.jsx
import React, { useEffect } from 'react';
import { GA4React } from "react-ga4";
import { useLocation } from 'react-router-dom';

const ga4 = new GA4React("G-9R1VH0Q9F9");

function Analytics({ children }) {
    const location = useLocation();

    useEffect(() => {
        ga4.initialize().then(() => {
            ga4.pageview(location.pathname + location.search);
        }).catch((err) => console.error("Failed to initialize GA4React", err));
    }, [location]);
    

    return children;
}

export default Analytics;
