import {useState } from "react";

export default function EduInfo (){
    const [data, setData] = useState({school : "", degree : "", year : ""});

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
                    name="school"
                    placeholder="School Name"
                    value={data.school}
                    onChange={handleChange}
                    />

                    <input
                    type="text"
                    name="degree"
                    placeholder="Degree"
                    value={data.degree}
                    onChange={handleChange}
                    />
                    
                    <input
                    type="text"
                    name="year"
                    placeholder="Year"
                    value={data.year}
                    onChange={handleChange}
                    />

                    <button onClick={() => setIsEditing(false)}>Submit</button>
                </>
            ) : (
                <div>
                    <p>School : {data.school}</p>
                    <p>Degree : {data.degree}</p>
                    <p>Passing Year : {data.year}</p>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                </div>
            )}
        </div>
    )

}