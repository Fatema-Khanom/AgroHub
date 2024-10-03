import React from 'react';
import Card from './Card';
import { StickyNavbar } from '../../Components/Navbar/Navbar';
import { FooterWithSocialLinks } from '../../Components/Footer/Footer';

const teamMembers = [
    { 
        image: 'https://i.ibb.co/YQ97yMn/Elias-formal.jpg', 
        name: 'Elias Ur Rahman', 
        profession: 'Machine Learning Engineer<br />Team Lead', 
        links: {
            linkedin: 'https://www.linkedin.com/in/eliasurrahman',
            facebook: 'https://www.facebook.com/eliasurrahman',
            gmail: 'eliasurrahman@gmail.com',
        }
    },
    { 
        image: 'https://i.ibb.co/KKXbZRP/372942665-643589834230712-1687149887830253232-n.png', 
        name: 'Adil Mahmoud Rion', 
        profession: 'Full Stack Web Dev', 
        links: {
            linkedin: 'https://www.linkedin.com/in/adilmahmoudrion',
            facebook: 'https://www.facebook.com/adilmahmoudrion',
            gmail: 'adilmahmoudrion@gmail.com',
        }
    },
    { 
        image: 'https://i.ibb.co/VtXVLhH/pallob-1.jpg', 
        name: 'Mursalatul Pallob', 
        profession: 'Researcher', 
        links: {
            linkedin: 'https://www.linkedin.com/in/mursalatulpallob',
            facebook: 'https://www.facebook.com/mursalatulpallob',
            gmail: 'mursalatulpallob@gmail.com',
        }
    },
    { 
        image: 'https://i.ibb.co/B6tb2Z3/IMG-20230905-221450-1.jpg', 
        name: 'Fatema Khanom', 
        profession: 'Frontend Web Developer', 
        links: {
            linkedin: 'https://www.linkedin.com/in/fatemakhanom',
            facebook: 'https://www.facebook.com/fatemakhanom',
            gmail: 'fatemaurmi2019@gmail.com',
        }
    },
    { 
        image: 'https://i.ibb.co/YPZDJtj/Asif-Elahi-2-1.jpg', 
        name: 'Asif Elahi', 
        profession: 'Game Developer', 
        links: {
            linkedin: 'https://www.linkedin.com/in/asifelahi',
            facebook: 'https://www.facebook.com/asifelahi',
            gmail: 'asifelahi@gmail.com',
        }
    },
    { 
        image: 'https://i.ibb.co/6sxYK7R/456727162-523715123922435-7268944288987263219-n.jpg', 
        name: 'Sarkar Sifatullah Haque Sajeeb', 
        profession: 'App Developer', 
        links: {
            linkedin: 'https://www.linkedin.com/in/sarkarsifatullahhaquesajeeb',
            facebook: 'https://www.facebook.com/sarkarsifatullahhaquesajeeb',
            gmail: 'sifatullah.haque@gmail.com',
        }
    },
];

const AboutUs = () => {
    return (
        <div className="">
            <StickyNavbar></StickyNavbar>
            <div className="bg-green-100 py-32">
            <h2 className="text-center text-4xl font-bold mb-6 text-green-800">About Us</h2>
            <div className="px-10 lg:px-40 mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
                {teamMembers.map((member, index) => (
                    <Card 
                        key={index} 
                        image={member.image} 
                        name={member.name} 
                        profession={member.profession} 
                        links={member.links} 
                    />
                ))}
            </div>
            </div>
            <FooterWithSocialLinks></FooterWithSocialLinks>
        </div>
    );
};

export default AboutUs;
