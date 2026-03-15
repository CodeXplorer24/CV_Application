import { useState } from "react";
import GeneralInfo from "./components/generalinfo";
import EduInfo from "./components/eduinfo";
import ExpInfo from "./components/exprience";
import CVPreview from "./components/cvpreview";
export default function App (){
    const [genInfo, setGeninfo] = useState({name : "", email : "", phone : ""});
    const [eduInfo, setEduInfo] = useState({school : "", degree : "", year : ""});
    const [expInfo, setExpInfo] = useState({company : "", position : "", resp: "", from : "", to : ""});
    return (
        <>
            <h1>CV Builder</h1>
            < GeneralInfo data={genInfo} setData={setGeninfo}/>
            < EduInfo data={eduInfo} setData={setEduInfo}/>
            < ExpInfo data={expInfo} setData={setExpInfo}/>
            < CVPreview genInfo={genInfo} eduInfo={eduInfo} expInfo={expInfo}/>
        </>
    )
}
