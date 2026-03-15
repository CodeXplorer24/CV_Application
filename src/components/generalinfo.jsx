import { useState } from "react";
export default function GeneralInfo(){
    const[isEditing, setIsEditing] = useState(false);

    const [data, setData] = useState({name : "", email : "", phone : ""});

    const handleChange = (e) => {
        setData({...data, [e.target.name] : e.target.value})
    }
    return (
        <>
            <h2>General Information</h2>
            {isEditing ? (
            <>
            <input
            type="text"
            name="name"
            placeholder="Name"
            value={data.name}
            onChange={handleChange}
            />

            <input
            type="text"
            name="email"
            placeholder="Email"
            value={data.email}
            onChange={handleChange}
            />
            
            <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={data.phone}
            onChange={handleChange}
            />
            
            <button onClick={() => setIsEditing(false)}>Submit</button>
            </>
            ) : (
                <>
                    <p>Name : {data.name}</p>
                    <p>E-mail : {data.email}</p>
                    <p>Phone : {data.phone}</p>

                    <button onClick={() => setIsEditing(true)}>Edit</button>
                </>
            )}
            
        </>
    )
}