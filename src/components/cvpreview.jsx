
export default function CVPreview ({genInfo, eduInfo, expInfo}){
    return (
      <div>
        <h2>CV Preview</h2>
        <h3>General Information</h3>
        <p>Name: {genInfo.name}</p>
        <p>Email: {genInfo.email}</p>
        <p>Phone: {genInfo.phone}</p>

        <h3>Education</h3>
        <p>School: {eduInfo.school}</p>
        <p>Degree: {eduInfo.degree}</p>
        <p>Date: {eduInfo.date}</p>

        <h3>Experience</h3>
        <p>Company: {expInfo.company}</p>
        <p>Position: {expInfo.position}</p>
        <p>Responsibilities: {expInfo.resp}</p>
        <p>
          Duration: {expInfo.from} - {expInfo.to}
        </p>
      </div>
    );
}