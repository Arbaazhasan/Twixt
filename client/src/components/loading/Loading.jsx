import React, { useEffect, useState } from 'react';
import './loading.scss';

const Loading = () => {

    const [loadingString, setLoadingString] = useState('');

    useEffect(() => {
        let currentStr = 'Loading...';
        let index = 0;
        const intervalId = setInterval(() => {
            setLoadingString(currentStr.slice(0, index + 1));
            index = (index + 1) % (currentStr.length + 1);
        }, 100);

        return () => clearInterval(intervalId); // Cleanup interval on component unmount or isLoading change
    }, []);

    return (
        <div className="Loading">
            <div>
            </div>

            {loadingString}

        </div>
    );
};

export default Loading;
