import React, { useEffect, useState } from 'react';
import './style.css';
import Card from 'react-bootstrap/Card';
import ReactLoading from 'react-loading';


const Home = () => {
    const [stats, setStats] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://covid-193.p.rapidapi.com/statistics?country=All', {
            'method': 'GET',
            'headers': {
                'x-rapidapi-host': 'covid-193.p.rapidapi.com',
                'x-rapidapi-key': 'a25a88bee4mshf0642108cda9e35p11f096jsnf5c5ddffa24d'
            }
        })
            .then(async response => {
                const res = await response.json();
                setStats(res.response);
                setLoading(false);
            })
            .catch(err => {
                setLoading(false);
                console.log(err);
            });
    }, []);

    if (loading) {
        return (
            <div className='d-flex justify-content-center w-100'>
                <ReactLoading type='spinningBubbles' color='#347B98' height={'10%'} width={'10%'} />
            </div>
        )
    }

    const death_rate = ((stats[0].deaths.total) / (stats[0].cases.active)) * 100;

    const survival_rate = ((stats[0].cases.recovered) / (stats[0].cases.active)) * 100;

    console.log(survival_rate);
    console.log(death_rate);

    return (
        <div>
            <div className="home">
                <Card className="cases">
                    <Card.Body>
                        <Card.Text className="number">{stats[0].cases.total}</Card.Text>
                        <Card.Subtitle className="text">Global Cases</Card.Subtitle>
                    </Card.Body>
                </Card>
                <Card className="cases">
                    <Card.Body>
                        <Card.Text className="number">{stats[0].deaths.total}</Card.Text>
                        <Card.Subtitle className="text">Global Death Count</Card.Subtitle>
                    </Card.Body>
                </Card>
                <Card className="cases">
                    <Card.Body>
                        <Card.Text className="number">{stats[0].cases.active}</Card.Text>
                        <Card.Subtitle className="text">Global Active Cases</Card.Subtitle>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Home;