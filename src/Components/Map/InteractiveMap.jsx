

import React from 'react';

const InteractiveMap = () => {
    return (
        <div className='px-4 lg:px-20'>
            <header className="pt-10 py-6 ">
          <h1 className="text-2xl text-green-900 font-bold">Agricultural land in South Asia</h1>
        </header>
          <div>
                 <iframe
              aria-label="Map"
              src="https://datawrapper.dwcdn.net/VkPHR/2/"
              style={{ width: '100%', height: '900px', border: 'none' }}
            ></iframe>
          </div>
        </div>
    );
};

export default InteractiveMap;