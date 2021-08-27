import React from 'react';
import Footer from '../components/layout/Footer';

const About = () => {
    return (
        <div className="content">
            content
        </div>
    );
};

export default About;

About.getLayout = function PageLayout(page){
    return (
        <>
            {page}
            <Footer />
        </>
    )
}