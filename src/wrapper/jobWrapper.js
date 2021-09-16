import React from 'react'
import Header from '../components/header'
import Joblist from '../components/joblist'
import GetList from '../graphql/getlist'
import { useQuery } from '@apollo/react-hooks';

export default function JobWrapper() {
    const { loading, error, data } = useQuery(GetList);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    console.log(data)
    return (
        <div>
            <section>
                {
                    data.jobs.map((jobs) => <Joblist key={jobs.id} jobs={jobs} />)
                }
            </section>

        </div>
    )
}
