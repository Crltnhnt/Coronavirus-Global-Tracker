import React, { useState, useEffect } from 'react';
import ReactLoading from 'react-loading';
import LoadingOverlay from 'react-loading-overlay';
import styled from '@emotion/styled';


import History from './History';

const Country = () => {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [country, setCountry] = useState('USA');
    const [stats, setStats] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        Promise.all([
            fetch('https://covid-193.p.rapidapi.com/countries', {
                'method': 'GET',
                'headers': {
                    'x-rapidapi-host': 'covid-193.p.rapidapi.com',
                    'x-rapidapi-key': 'a25a88bee4mshf0642108cda9e35p11f096jsnf5c5ddffa24d'
                }
            }),
            fetch(`https://covid-193.p.rapidapi.com/statistics?country=${country}`, {
                'method': 'GET',
                'headers': {
                    'x-rapidapi-host': 'covid-193.p.rapidapi.com',
                    'x-rapidapi-key': 'a25a88bee4mshf0642108cda9e35p11f096jsnf5c5ddffa24d'
                }
            })
        ]).then(async ([allCountires, data]) => {
            const countries = await allCountires.json();
            const stats = await data.json();
            setCountries(countries.response);
            setStats(stats.response);
            setLoading(false);
        }).catch(err => {
            setLoading(false);
            console.log(err);
        });
    }, [country])

    const handleCountryChange = e => {
        setIsLoading(true);
        setCountry(e.target.value);
        fetch(`https://covid-193.p.rapidapi.com/statistics?country=${e.target.value}`, {
            'method': 'GET',
            'headers': {
                'x-rapidapi-host': 'covid-193.p.rapidapi.com',
                'x-rapidapi-key': 'a25a88bee4mshf0642108cda9e35p11f096jsnf5c5ddffa24d'
            }
        }).then(async data => {
            const stats = await data.json();
            setStats(stats.response);
            setIsLoading(false);
        }).catch(err => {
            setIsLoading(false);
            console.log(err);
        });
    }

    const renderSelectBox = () => {
        if (countries.length !== 0) {
            
            return (
                <form className='w-100'>
                    <div className='form-group row justify-content-center d-flex'>
                        <label htmlFor='country' className='d-flex justify-content-center col-lg-6 col-sm-4 col-form-label col-md-6'><strong>Choose a Country</strong></label>
                        <div className='d-flex justify-content-center col-sm-8 col-lg-6 col-md-6'>
                            <select id='country' className='country-select' value={country} onChange={handleCountryChange}>
                                {countries.map(country => <option key={country} value={country}>{country}</option>)}
                            </select>
                        </div>
                    </div>
                </form>
            )
        }

        return null;
    };

    const Card = styled('div')`
        &:hover {
            box-shadow: 0px 0px 25px 1px rgba(0, 0, 0, 0.75)
        }
    `;

    if (loading) {
        return (
            <div className='d-flex justify-content-center w-100'>
                <ReactLoading type='spinningBubbles' color='#347B98' height={'10%'} width={'10%'} />
            </div>
        )
    }

    return (
        <LoadingOverlay
            spinner
            active={isLoading}
            text='Please wait...'
        >
            <div className='row display-flex'>
                <div className='col-12 mb-2'>
                    <div className='d-flex justify-content-center w-100 m-2'>
                        {renderSelectBox()}
                    </div>
                </div>
                <div className='col-12 col-lg-6 col-sm-12'>
                    <div className='row'>
                        <div className="col-12 col-sm-6 mb-3 mb-sm-4">
                            <Card className="card h-100 bg-tiber">
                                <div className="card-body text-center">
                                    <h5 className="card-title">Total Cases</h5>
                                    <p className='stat-number'>{stats[0].cases.total}</p>
                                </div>
                            </Card>
                        </div>
                        <div className="col-12 col-sm-6 mb-3 mb-sm-4">
                            <Card className="card h-100 bg-green">
                                <div className="card-body text-center">
                                    <h5 className="card-title">Active Cases</h5>
                                    <p className='stat-number'>{stats[0].cases.active}</p>
                                </div>
                            </Card>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-12 col-sm-6 mb-3">
                            <Card className="card h-100 bg-astral">
                                <div className="card-body text-center">
                                    <h5 className="card-title">Recovered Cases</h5>
                                    <p className='stat-number'>{stats[0].cases.recovered}</p>
                                </div>
                            </Card>
                        </div>
                        <div className="col-12 col-sm-6 mb-3">
                            <Card className="card h-100 bg-red">
                                <div className="card-body text-center">
                                    <h5 className="card-title">Total Deaths</h5>
                                    <p className='stat-number'>{stats[0].deaths.total}</p>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-lg-6 col-sm-12'>
                    <History selectedCountry={country} />
                </div>
            </div>
        </LoadingOverlay>
    );
};

export default Country;