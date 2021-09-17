import React from 'react'
import Header from '../components/header'
import GetList from '../graphql/getlist'
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag'
import GetListbyLocation from '../graphql/getlistbylocation';
import GetByCompany from '../graphql/getlistByCompany';
import Joblist from '../components/joblist';

export default function SearchByCountyName() {

    const [getstr, setstr] = React.useState()
    const [getcompany, setcompany] = React.useState()
    const [getjobTitle, setjobTitle] = React.useState()
    const [gettrue, settrue] = React.useState(false)


    const { loading, error, data } = useQuery(!gettrue ? GetList : GetListbyLocation, {
        variables: {
            "input": {
                "slug": getstr
            }
        }
    }
    );


    const handleChange = (event) => {
        settrue(false)
        setstr(event.target.value);
    }
   
    const handleSubmit = async (event) => {
        event.preventDefault();
        await settrue(true)
    }

    if (loading) return <p>Loading...</p>;
    if (error) return <p>not found:(</p>;
    console.log(data)
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    <input placeholder="countryName or Location" style={{ marginLeft: 500, marginTop: 50, width: 200, height: 30 }} type="text" value={getstr} onChange={handleChange} />
                </label>
                <input type="submit" style={{ marginLeft: 10, marginTop: 50, width: 100, height: 30 }} value="Search" />
            </form>
            <section>

                {
                    !gettrue ?
                        data.jobs.map((jobs) => <Joblist key={jobs.id} jobs={jobs} />)
                        :
                        data.country.jobs.map((jobs) => <Joblist key={jobs.id} jobs={jobs} />)

                }
            </section>

        </div>
    )
}

