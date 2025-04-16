import React from 'react'

const Home = () => {

    const [set, setSetter] = React.useState([])

    const handelSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        const address = { street: formJson.street, town: formJson.town, province: formJson.province, postalCode: formJson.postalCode, country: 'sri lanka', }
        const finalData = { name: formJson.name, email: formJson.email, number: formJson.number, address: address }

        setSetter(prevSet => {
            const updateSet = [...prevSet, finalData]
            localStorage.setItem('dataSet', JSON.stringify(updateSet))
            return updateSet
        })
        form.reset()
    }

    React.useEffect(() => {
        const updateData = JSON.parse(localStorage.getItem('dataSet')) || []
        setSetter(updateData)
    }, [])

    const saveTableData = () => {
        console.log(set)
    }

    const remove = (index) => {
        const updateData = set.filter((_, i) => i !== index);
        localStorage.setItem('dataSet', JSON.stringify(updateData))
        setSetter(updateData)
    };
    console.log('set: ', set)
    return (
        <>
            <div>
                <form onSubmit={handelSubmit}>
                    <div>
                        <fieldset>
                            <legend>Profile data</legend>
                            <div>
                                <label>Name: </label>
                                <input type="text" name="name" />
                            </div>
                            <div>
                                <label>Email: </label>
                                <input type="email" name="email" />
                            </div>
                            <div>
                                <label>Phone Number: </label>
                                <input type="text" name="number" />
                            </div>
                            <fieldset>
                                <legend>Address</legend>
                                <div>
                                    <label>Street Address: </label>
                                    <input type="text" name="street" placeholder="e.g. 123 Main St" />
                                </div>
                                <div>
                                    <label>Town/City: </label>
                                    <input type="text" name="town" />
                                </div>
                                <div>
                                    <label>Province/State: </label>
                                    <input type="text" name="province" />
                                </div>
                                <div>
                                    <label>Postal Code / ZIP: </label>
                                    <input type="text" name="postalCode" />
                                </div>
                                <div>
                                    <label>Country: </label>
                                    <input type="text" name="country" value={'sri lanka'} disabled />
                                </div>
                            </fieldset>
                            <div>
                                <button type="submit">Add</button>
                            </div>
                        </fieldset>
                    </div>
                </form>
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
                                <th>Action</th>
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
                                    <td><button onClick={() => remove(i)}>Delete</button><button>Edit</button></td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
                <div>
                    {set.length <= 0 ? (<button disabled>save</button>) : (<button onClick={saveTableData}>save</button>)}
                </div>
            </div>
        </>
    )
}

export default Home
