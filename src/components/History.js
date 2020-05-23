import React, { useState, useEffect } from 'react';
import ReactLoading from 'react-loading';
import { LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line, ResponsiveContainer } from 'recharts';

const History = ({ selectedCountry }) => {
    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (selectedCountry) {
            fetch(`https://covid-193.p.rapidapi.com/history?country=${selectedCountry}`, {
                'method': 'GET',
                'headers': {
                    'x-rapidapi-host': 'covid-193.p.rapidapi.com',
                    'x-rapidapi-key': 'a25a88bee4mshf0642108cda9e35p11f096jsnf5c5ddffa24d'
                }
            }).then(async data => {
                const stats = await data.json();
                setHistory(stats.response);
                setLoading(false);
            }).catch(err => {
                setLoading(false);
                console.log(err);
            });
        } else {
            fetch('https://covid-193.p.rapidapi.com/history?country=All', {
                'method': 'GET',
                'headers': {
                    'x-rapidapi-host': 'covid-193.p.rapidapi.com',
                    'x-rapidapi-key': 'a25a88bee4mshf0642108cda9e35p11f096jsnf5c5ddffa24d'
                }
            }).then(async data => {
                const stats = await data.json();
                setHistory(stats.response);
                setLoading(false);
            }).catch(err => {
                setLoading(false);
                console.log(err);
            });
        }
    }, [selectedCountry]);

    if (loading) {
        return (
            <div className='d-flex justify-content-center w-100'>
                <ReactLoading type='spinningBubbles' color='#347B98' height={'10%'} width={'10%'} />
            </div>
        )
    }

    return (
        <div className={`d-flex justify-content-center ${selectedCountry ? 'flex-column' : ''}`}>
            {
                selectedCountry ?
                    <div className='d-flex justify-content-center'>
                        <h3>History ({selectedCountry})</h3>
                    </div>
                    :
                    null
            }
            <div style={{ width: '100%', maxWidth: '600px', height: '300px' }}>
                <ResponsiveContainer>
                    <LineChart
                        data={history}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                        <XAxis
                            dataKey='time'
                            reversed
                            tickFormatter={value => {
                                return new Date(value).toLocaleDateString();
                            }}
                        />
                        <YAxis dataKey='cases.active' />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip 
                            labelFormatter={value => {
                                return new Date(value).toLocaleString();
                            }}
                            labelStyle={{
                                color: '#000000'
                            }}
                        />
                        <Legend />
                        <Line type="monotone" dot={false} name='Total Cases' dataKey="cases.total" stroke="#052D3D" activeDot={{ r: 8 }} />
                        <Line type="monotone" dot={false} name='Active Cases' dataKey="cases.active" stroke="#B2D732" activeDot={{ r: 8 }} />
                        <Line type="monotone" dot={false} name='Recovered Cases' dataKey="cases.recovered" stroke="#347B98" activeDot={{ r: 8 }} />
                        <Line type="monotone" dot={false} name='Total Deaths' dataKey="deaths.total" stroke="#FE2712" activeDot={{ r: 8 }} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default History;