import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Update this line


const Card = ({ image, name, profession, links }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-4 m-2 border border-green-500 transition duration-300 transform hover:shadow-xl hover:bg-green-500 hover:text-white">
            <img src={image} alt={name} className="rounded-full w-32 h-32 mx-auto" />
            <h3 className="text-center text-xl font-semibold mt-2">{name}</h3>
            <p className="text-center text-md font-medium" dangerouslySetInnerHTML={{ __html: profession }} />
            <p className="text-center text-sm text-gray-600">Dhaka International University</p>
            <p className="text-center text-sm text-gray-600">Dhaka, Bangladesh</p>

            <div className="flex justify-center mt-4">
                <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="mx-2">
                    <FontAwesomeIcon icon={faLinkedin} className="text-xl hover:text-green- transition duration-200" />
                </a>
                <a href={links.facebook} target="_blank" rel="noopener noreferrer" className="mx-2">
                    <FontAwesomeIcon icon={faFacebook} className="text-xl text- hover:text-green- transition duration-200" />
                </a>
                <a href={`mailto:${links.gmail}`} className="mx-2">
                    <FontAwesomeIcon icon={faEnvelope} className="text-xl hover:text-green- transition duration-200" />
                </a>
            </div>
        </div>
    );
};

export default Card;
