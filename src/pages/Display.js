import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';
import "./display.css";
export const Display = () => {

    const Auth = localStorage.getItem('isAuth');
    const nav = useNavigate();
    const [apidata, setApiData] = useState([]);

    useEffect(() => {
        console.log(apidata);
    }, [apidata])


    const fetchMoreData = () => {
        axios.get("https://randomuser.me/api/?results=10").then(results => {
            let req = [];
            req = results.data.results;
            console.log(apidata);
            setApiData(resdata => {
                return [
                    ...resdata,
                    ...req
                ]
            })

        })
    }

    useEffect(() => {
        fetchMoreData();
    }, [])
    console.log(!(Auth));
    if (Auth === 'false') {
        return <div>
            <h4>Not Authorized Please Login Again</h4>
            <button onClick={() => {
                nav('/');
            }}>Click here to login</button>
        </div>
    }

    else return (
        <div className='main-div'>
            <div className='logout-btn'>
                <button onClick={() => {
                    localStorage.setItem('isAuth', false);
                    nav('/');
                }} > {'<'}</button>
            </div>
            <div className='cards'>
                <InfiniteScroll
                    dataLength={apidata.length}
                    next={fetchMoreData}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}

                >
                    {apidata.map((i, index) => (
                        <div className='card-content' key={index}>
                            <div className='card-text'>{i.name.title + " " + i.name.first + " " + i.name.last}</div>
                            <div className='card-image'>
                                <img src={i.picture.medium} />
                            </div>
                        </div>
                    ))}
                </InfiniteScroll>
            </div>

        </div>
    )
}
