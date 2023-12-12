import { useState, useEffect } from 'react';
import defaultImg from '../assets/StatementIcon.jpg';
import './Timeline.scss';

const Timeline = () => {
    const [timelineData, setTimelineData] = useState([]);
    const [itemsToShow, setItemsToShow] = useState(10);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://proxy-server-ny3r.onrender.com/combinedData');
                const data = await response.json();

                const timelineData = data.Timeline;

                console.log('Fetched Data:', timelineData);

                setTimelineData(data.timelineData || []);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    //Load more content function
    const handleLoadMore = () => {
        setItemsToShow(itemsToShow + 10);
    }

    return (
        <div className='container'>
            {isLoading ? (
                <p className='loading-text'>Loading content ...</p>
            ): (
                <div>
                <ul className='timeline'>
                {timelineData.slice(0, itemsToShow).map((item) => (
                    <li key={item.Id}>
                        <div className='intro'>
                            <p>{item.Title.slice(0, 50)}</p>
                            <p><small>{item.Category}</small></p>
                            <p>{item.Description}</p>
                            <p><small>{item.CreateDate}</small></p>
                        </div>
                        <div className='image-container'>
                            {item.Image ? (
                                <img className='image' src={`https://arthurfrost.qflo.co.za/${item.Image}`} alt={item.Title}/>
                            ) : (
                                <img className='image' src={defaultImg} alt='default' />
                            )}
                        </div>

                        <audio controls>
                        <source src={`https://arthurfrost.qflo.co.za/${item.Audio}`} type="audio/mp3" />
                        Your browser does not support the audio element.
                        </audio>
    
                    </li>
                ))}
                </ul>
                {timelineData.length > itemsToShow && (
                    <button className='load-more-btn' onClick={handleLoadMore}>Load More</button>
                )}
                </div>
            )}
            
        </div>
    )
}

export default Timeline;