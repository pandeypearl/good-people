import { useState, useEffect } from 'react';
import './Timeline.scss';

const Timeline = () => {
    const [timelineData, setTimelineData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3001');
                const data = await response.json();

                setTimelineData([data]);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {timelineData.map(item => (
                <div key={item.Id}>
                    <h3>{item.Title}</h3>
                    <img src={`https://arthurfrost.qflo.co.za/Images/${item.Image}`} alt={item.Title} style={{ maxWidth: '100%' }} />
                    <audio controls>
                        <source src={`https://arthurfrost.qflo.co.za/MP3/${item.Audio}`} type="audio/mp3" />
                        Your browser does not support the audio element.
                    </audio>
                </div>
            ))}
        </div>
    )
}

export default Timeline;