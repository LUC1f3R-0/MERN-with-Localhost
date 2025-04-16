import React from 'react'

const Contact = () => {

    const [set, setSetter] = React.useState([])

    React.useEffect(() => {
        const starter = JSON.parse(localStorage.getItem('dataSet')) || []
        setSetter(starter)
    }, [])

    return (
        <>
            <div>
                <table border="1" cellSpacing="0">
                    <thead>
                        <tr>
                            <th rowSpan="2">Name</th>
                            <th rowSpan="2">Email</th>
                            <th rowSpan="2">Number</th>
                            <th colSpan="5">Address</th>
                        </tr>
                        <tr>
                            <th>Street Address</th>
                            <th>Town/City</th>
                            <th>Province/State</th>
                            <th>Postal Code / ZIP</th>
                            <th>Country</th>
                        </tr>
                    </thead>
                    <tbody>
                        {set.map((one, i) => {
                            return <tr key={i}>
                                <td>{one.name}</td>
                                <td>{one.email}</td>
                                <td>{one.number}</td>
                                <td>{one.address.street}</td>
                                <td>{one.address.town}</td>
                                <td>{one.address.province}</td>
                                <td>{one.address.postalCode}</td>
                                <td>Sri Lanka</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Contact
