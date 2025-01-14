// src/components/Header.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const modes = [
    { name: 'Picture Mode' },
    { name: 'Language Translation' },
    { name: 'Assistant Mode' },
    { name: 'Health Mode' },
    { name: 'Learn Mode' },
    { name: 'Speak Mode' }
];

const Header = () => {
    const [showModes, setShowModes] = useState(false);

    const toggleModeSelector = () => {
        setShowModes(!showModes);
    };

    return (
        <>
            <button
                className="fixed top-4 right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-300"
                onClick={toggleModeSelector}
            >
                Change Mode
            </button>

            {/* Mode Selector Modal */}
            {showModes && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold mb-4">Select a Mode</h2>
                        <div className="grid grid-cols-1 gap-4">
                            {modes.map((mode, index) => (
                                <Link key={index} to={`/${mode.name.toLowerCase().replace(' ', '-')}`}>
                                    <div className="bg-blue-100 p-4 rounded-lg shadow hover:bg-blue-200 transition-colors duration-300">
                                        {mode.name}
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <button
                            className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors duration-300"
                            onClick={toggleModeSelector}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;
