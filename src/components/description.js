import React from 'react'

export default function Description(props) {
    const [getjobs, setjobs] = React.useState([])
    const [getdes, setdes] = React.useState()
    React.useEffect(async () => {
        console.log(props.location.jobs.jobs)
        await setjobs(props.location.jobs.jobs)
    }, [])
    return (
        <div>
            <h1>{props.location.jobs.jobs.company.name} is hiring a <span style={{ color: "blue" }}>{getjobs.title}</span></h1>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ width: '50%', paddingLeft: 20 }}>
                    <p>{getjobs.description}</p>
                </div>
                <div style={{ width: '50%', height: '50%', marginLeft: 50 }}>
                    <h3>Location</h3>
                    <p style={{ marginLeft: 20 }}>{getjobs.locationNames}</p>
                    <h3>Email</h3>
                    <p style={{ marginLeft: 20 }}>{getjobs.userEmail}</p>
                    <h3>Tags</h3>
                    <div style={{ marginLeft: 20 }}>
                        {
                            props.location.jobs.jobs.tags.map((o) => <i style={{ paddingLeft: 5 }}>{o.name} ,  </i>)
                        }
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 50 }}>
                        <a href={getjobs.applyUrl}>
                            <button style={{ width: 100, height: 50, backgroundColor: 'black', color: 'white' }}> Apply</button>
                        </a>
                    </div>
                </div>


            </div>
        </div>
    )
}
