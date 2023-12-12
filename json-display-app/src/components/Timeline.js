import { useState, useEffect } from 'react';
import './Timeline.scss';

const Timeline = () => {
    const [timelineData, setTimelineData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3001/combinedData');
                const data = await response.json();

                const timelineData = data.Timeline;

                console.log('Fetched Data:', timelineData);

                setTimelineData(data.timelineData || []);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='container'>
            <ul className='timeline'>
                {timelineData.slice(0, 20).map((item) => (
                <li key={item.Id}>
                    <div className='intro'>
                        <p>{item.Title}</p>
                        <p><small>{item.Category}</small></p>
                        <p>{item.Description}</p>
                        <p><small>{item.CreateDate}</small></p>
                    </div>
                    <div className='image-container'>
                        <img className='image' src={`https://arthurfrost.qflo.co.za/${item.Image}`} alt={item.Title}/>
                    </div>

                    <audio controls>
                    <source src={`https://arthurfrost.qflo.co.za/${item.Audio}`} type="audio/mp3" />
                    Your browser does not support the audio element.
                    </audio>
  
                </li>
                ))}
            </ul>

        </div>
    )
}

export default Timeline;