import React from 'react'
import Header from '../components/header'
import Joblist from '../components/joblist'
import GetList from '../graphql/getlist'
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag'
import GetListbyLocation from '../graphql/getlistbylocation';
import GetByCompany from '../graphql/getlistByCompany';
import {Link} from 'react-router-dom';
export default function JobWrapper() {

    const [getstr, setstr] = React.useState()
    const [getcompany, setcompany] = React.useState()
    const [getjobTitle, setjobTitle] = React.useState()
    const [gettrue, settrue] = React.useState(false)


    const { loading, error, data } = useQuery(!gettrue ? GetList : GetByCompany, {
        variables: {
            "input": {
                "companySlug": getcompany,
                "jobSlug": getjobTitle
            }
        }
    }
    );
    const handleChange1 = (event) => {
        settrue(false)
        var s = event.target.value.toLowerCase();
        setcompany(s);
    }
    const handleChange2 = async (event) => {
        settrue(false)
        var res = await event.target.value.toLowerCase();
        res = res.replaceAll(" ", "-");
        setjobTitle(res);
    }


    const handleChange = (event) => {
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
        <Link to={{
            pathname:'/searchbycountry'
          }}><button style={{ height: 35, width: 120, background: 'blue', color: "white", margin: 20,float:'right' }}>Search by country name</button></Link>
   
            
            <form onSubmit={handleSubmit}>
                <label style={{ display: 'flex', flexDirection: 'row' }}>
                    <input placeholder="company name" style={{ marginLeft: 400, marginTop: 50, width: 200, height: 30 }} type="text" value={getcompany} onChange={handleChange1} />
                    <input placeholder="job title" style={{ marginLeft: 10, marginTop: 50, width: 200, height: 30 }} type="text" value={getjobTitle} onChange={handleChange2} />

                    <input type="submit" style={{ marginLeft: 10, marginTop: 50, width: 100, height: 30 }} value="Search" />
                </label>
            </form>

            <section>

                {
                    !gettrue ?
                        data.jobs.map((jobs) => <Joblist key={jobs.id} jobs={jobs} />)
                        :
                        //         data.country.jobs.map((jobs) => <Joblist key={jobs.id} jobs={jobs} />)
                        <Joblist jobs={data.job} />
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