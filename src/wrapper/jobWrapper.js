import React from 'react'
import Header from '../components/header'
import Joblist from '../components/joblist'
import GetList from '../graphql/getlist'
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag'
import GetListbyLocation from '../graphql/getlistbylocation';
export default function JobWrapper() {

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
        setstr(event.target.value);
    }
   
    const handleSubmit = async (event) => {
        event.preventDefault();
        await settrue(true)
    }

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
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
                        // data.job.map((jobs) => <Joblist key={jobs.id} jobs={jobs} />)
                }
            </section>

        </div>
    )
}


            // <form onSubmit={handleSubmit}>
            //     <label style={{ display: 'flex', flexDirection: 'row' }}>
            //         <input placeholder="company name" style={{ marginLeft: 500, marginTop: 50, width: 200, height: 30 }} type="text" value={getcompany} onChange={handleChange1} />
            //         <input placeholder="job title" style={{ marginLeft: 10, marginTop: 50, width: 200, height: 30 }} type="text" value={getjobTitle} onChange={handleChange2} />

            //         <input type="submit" style={{ marginLeft: 10, marginTop: 50, width: 100, height: 30 }} value="Search" />
            //     </label>
            // </form>


                // const { loading, error, data } = useQuery(!gettrue?GetList: GetByCompany, {
                //     variables:{
                //         "input": {
                //             "companySlug":getcompany,
                //             "jobSlug": getjobTitle
                //         }
                //       }       
                //   }
                //   );

                // const handleChange1=(event)=>{
                //     setcompany(event.target.value);
                //   }
                // const handleChange2=(event)=>{
                //     setjobTitle(event.target.value);
                //   }