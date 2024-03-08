import {useState, React } from "react";
import '../styles/form.css';

function Form(props) {
        const [name, setName] = useState();
        const [email, setEmail] = useState();
        const [phone, setPhone] = useState();
        const [InstituteM, setInstituteM] = useState();
        const [InstituteI, setInstituteI] = useState();
        const [InstituteG, setInstituteG] = useState();
        const [InstitutePG, setInstitutePG] = useState();
        const [dateM, setDateM] = useState();
        const [dateI, setDateI] = useState();
        const [dateG, setDateG] = useState();
        const [datePG, setDatePG] = useState();
        const [companies, setCompanies] = useState();
        const [durations, setDurations] = useState();
        const [roles, setRoles] = useState();
        const [responsibilities, setResponsibilities] = useState();
        const [skill, setSkills] = useState();
    function handleSubmit(e) {
        e.preventDefault();
        const data = {
            name,
            email,
            phone,
            InstituteM,
            InstituteI,
            InstituteG,
            InstitutePG,
            dateM,
            dateI,
            dateG,
            datePG,
            companies,
            durations,
            roles,
            responsibilities,
            skill
        }
        localStorage.setItem('userData', JSON.stringify(data));
        let retrievedData = localStorage.getItem('userData');
        console.log(JSON.parse(retrievedData));
    }

    return (
        <div className='w-100 h-100 d-flex justify-content-center align-items-center flex-column mt-5 pt-2'>
            <div className="login-container" id="loginContainer" style={{background: props.mode === 'light' ? 'rgba(39, 161, 245, 0.06)' : 'rgba(255, 255, 255, 0.1)'}}>
                <div className="login-header">
                    <h2>Manage<br/><span>Data</span></h2>
                </div>
                <div className="login-form">
                    <form >
                        <div className={'border p-3 rounded border-3 my-3'}>
                            <h3>Personal Details</h3>
                            <div className="input-group">
                                <i className="fa-solid fa-user-circle"></i>
                                <input type="text" placeholder="Name" id="name" onChange={(e) => {setName(e.target.value)} } required/>
                            </div>
                            <div className="input-group ">
                                <i className="fas fa-user"></i>
                                <input type="email" placeholder="Email" id="email" onChange={(e) => {setEmail(e.target.value)} } required/>
                            </div>
                            <div className="input-group">
                                <i className="fa-solid fa-phone"></i>
                                <input type="tel" placeholder="Phone No." id="phone" onChange={(e) => {setPhone(e.target.value)} } required/>
                            </div>
                        </div>
                        <div className={'border p-3 rounded border-3 my-3'}>
                            <h3>Education</h3>
                            <h6>Matriculation</h6>
                            <div className="input-group">
                                <i className="fa-solid fa-building-columns"></i>
                                <input type="text" placeholder="Intitute" id="instituteM" onChange={(e) => {setInstituteM(e.target.value)} } required/>
                            </div>
                            <div className="input-group">
                                <i className="fa-solid fa-calendar-days"></i>
                                <input type="date" placeholder="Date of Compelition" id="dateM"
                                       style={{color: 'grey', cursor: 'pointer'}} onChange={(e) => {setDateM(e.target.value)} } required/>
                            </div>
                            <h6>Intermediate</h6>
                            <div className="input-group ">
                                <i className="fa-solid fa-building-columns"></i>
                                <input type="text" placeholder="Intitute" id="instituteI" onChange={(e) => {setInstituteI(e.target.value)} } required/>
                            </div>
                            <div className="input-group">
                                <i className="fa-solid fa-calendar-days"></i>
                                <input type="date" placeholder="Date of Compelition" id="dateI"
                                       style={{color: 'grey', cursor: 'pointer'}} onChange={(e) => {setDateI(e.target.value)} }  required/>
                            </div>
                            <h6>Graduate</h6>
                            <div className="input-group">
                                <i className="fa-solid fa-building-columns"></i>
                                <input type="text" placeholder="Intitute" id="InstituteG" onChange={(e) => {setInstituteG(e.target.value)} } required/>
                            </div>
                            <div className="input-group">
                                <i className="fa-solid fa-calendar-days"></i>
                                <input type="date" placeholder="Date of Compelition" id="dateG"
                                       style={{color: 'grey', cursor: 'pointer'}} onChange={(e) => {setDateG(e.target.value)} }  required/>
                            </div>
                            <h6>Post Graduate</h6>
                            <div className="input-group">
                                <i className="fa-solid fa-building-columns"></i>
                                <input type="text" placeholder="Intitute" id="InstitutePG" onChange={(e) => {setInstitutePG(e.target.value)} } required/>
                            </div>
                            <div className="input-group">
                                <i className="fa-solid fa-calendar-days"></i>
                                <input type="date" placeholder="Date of Compelition" id="datePG"
                                       style={{color: 'grey', cursor: 'pointer'}} onChange={(e) => {setDatePG(e.target.value)} }  required/>
                            </div>
                        </div>
                        <div className={'border p-3 rounded border-3 my-3'}>
                            <h3>Work Experience</h3>
                            <div className="input-group">
                                <i className="fa-solid fa-building"></i>
                                <input type="text" placeholder="Separate Companies with commas(,)" id="companies"
                                       onChange={(e) => {setCompanies(e.target.value)} }  required/>
                            </div>
                            <div className="input-group">
                                <i className="fa-solid fa-user-tie"></i>
                                <input type="text" placeholder="Separate Roles with commas(,)" id="roles" onChange={(e) => {setRoles(e.target.value)} }  required/>
                            </div>
                            <div className="input-group">
                                <i className="fa-solid fa-person-running"></i>
                                <input type="text" placeholder="Separate Resposibilities with commas(,)"
                                       id="responsibilites" onChange={(e) => {setResponsibilities(e.target.value)} }  required/>
                            </div>
                            <div className="input-group">
                                <i className="fa-solid fa-clock"></i>
                                <input type="text" placeholder="Separate Durations with commas(,)" id="durations"
                                       onChange={(e) => {setDurations(e.target.value)} }  required/>
                            </div>
                        </div>
                        <div className={'border p-3 rounded border-3 my-3'}>
                            <h3>Skills</h3>
                            <div className="input-group">
                                <i className="fa-solid fa-list-check"></i>
                                <input type="text" placeholder="Separate skills with commas(,)" id="skills" onChange={(e) => {setSkills(e.target.value)} }  required/>
                            </div>
                        </div>
                        <button id="signup" className='button' onClick={
                            (e)=>{
                                e.preventDefault();
                                handleSubmit(e);
                            }
                        }>Generate CV</button>
                    </form>
                </div>
                {/*<div className="signup-link">*/}
                {/*    I have an account? <Link to="/">Login</Link>*/}
                {/*</div>*/}
            </div>
        </div>
    );
}

export default Form;