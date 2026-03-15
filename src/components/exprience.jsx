import {useState } from "react";

export default function ExpInfo ({data, setData}){
    const [isEditing, setIsEditing] = useState(false);

    function handleChange (e) {
        setData({...data, [e.target.name] : e.target.value})
    }

    return (
        <div>
            <h2>Education</h2>
            { isEditing ? (
                <>
                    <input
                    type="text"
                    name="company"
                    placeholder="Company"
                    value={data.company}
                    onChange={handleChange}
                    />

                    <input
                    type="text"
                    name="position"
                    placeholder="Position"
                    value={data.position}
                    onChange={handleChange}
                    />
                    
                    <input
                    type="text"
                    name="responsbilities"
                    placeholder="Responsbilities"
                    value={data.resp}
                    onChange={handleChange}
                    />
                    
                    <input
                    type="text"
                    name="from"
                    placeholder="From"
                    value={data.from}
                    onChange={handleChange}
                    />

                    <input
                    type="text"
                    name="to"
                    placeholder="To"
                    value={data.to}
                    onChange={handleChange}
                    />
                    <button onClick={() => setIsEditing(false)}>Submit</button>
                </>
            ) : (
                <div>
                    <p>Company : {data.company}</p>
                    <p>Position : {data.position}</p>
                    <p>Responsbilities : {data.resp}</p>
                    <p>From : {data.from}</p>
                    <p>To : {data.to}</p>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                </div>
            )}
        </div>
    )

}