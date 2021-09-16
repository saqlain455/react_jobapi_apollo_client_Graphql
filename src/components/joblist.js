import React from 'react'
export default function Joblist({ jobs }) {
    return (
        <div >
        <hr></hr>
            <div style={{ marginBottom:100 }}>
                <div style={{ display: 'flex', flexDirection: 'row', height: 100, width: '100%'}}>
                    <div style={{width:50,height:50,paddingTop:20}} >
                        <img src={jobs.company.logoUrl ? jobs.company.logoUrl : 'https://th.bing.com/th/id/R.e586cc10b1ec82e670be703c18f813cf?rik=tSbQ1iV6HUxzhQ&riu=http%3a%2f%2fimgsrv1.pxdrive.com%2fpics%2fnorm%2f213469.jpg&ehk=LRgPMNNLcVrz4ZE9bs1jB0Klbr80FcsWHqa6j6RITpE%3d&risl=&pid=ImgRaw&r=0'} width="50" height="50" alt="logo" />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <h1 style={{}}>  {jobs.title}</h1>
                            <div style={{ display: 'flex', marginLeft: 20, alignItems: 'center' }}>
                                <p style={{}}>  {jobs.userEmail}</p>
                            </div>
                        </div>
                        <div style={{marginLeft:12,marginTop:0}}>
                        <p >Company : {jobs.company.name}</p>
                        <p >Published : {jobs.postedAt}</p>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <a href={jobs.applyUrl}>
                        <button style={{ height: 30, width: 70, background: 'red', color: "white" }}>apply url</button>
                          </a>
                            <button style={{ height: 30, width: 70, background: 'blue', color: "white", marginLeft: 20 }}>Detail</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
