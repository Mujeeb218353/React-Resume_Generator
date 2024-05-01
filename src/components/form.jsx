import {useState, useEffect } from "react";
import '../styles/form.css';
import {object, string, date, array} from 'yup';
import {useNavigate} from "react-router-dom";

function Form(props) {
    const [nameOfPerson, setNameOfPerson] = useState();
    const [emailOfPerson, setEmailOfPerson] = useState();
    const [phoneNo, setPhoneNo] = useState();
    const [degreeTitle, setDegreeTitle] = useState()
    const [institute, setInstitute] = useState();
    const [dateOfCompletion, setDateOfCompletion] = useState();
    const [experiences, setExperiences] = useState([])
    const [skills, setSkills] = useState([]);
    const [inputSkillsValue, setInputSkillsValue] = useState('');
    const [description, setDescription] = useState()
    const [inputExperiencesValue, setInputExperiencesValue] = useState('');
    // eslint-disable-next-line no-unused-vars
    const [errors, setErrors] = useState({});
    const  navigate = useNavigate();
    const userDataSchema = object({
        nameOfPerson: string().required("Name is required"),
        emailOfPerson: string().email("Invalid email").required("Email is required"),
        phoneNo: string().required("Phone number is required"),
        institute: string().required("Institute name is required"),
        dateOfCompletion: date().required('Completion Date is required'),
        experiences: array().of(string()).required('Experiences are required'),
        skills: array().of(string()).required("Skills are required"),
        description: string().required("Description is required"),
    });

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            await userDataSchema.validate({
                nameOfPerson,
                emailOfPerson,
                phoneNo,
                degreeTitle,
                institute,
                dateOfCompletion,
                experiences,
                skills,
                description
            }, { abortEarly: false });

            const data = {
                nameOfPerson,
                emailOfPerson,
                phoneNo,
                degreeTitle,
                institute,
                dateOfCompletion,
                experiences,
                skills,
                description
            };
            localStorage.setItem('userData', JSON.stringify(data));
            navigate('/resume')
        } catch (error) {
            const validationErrors = [];
            error.inner.forEach(err => {
                validationErrors.push(err.message);
                console.log(err.message);
            });
            setErrors(validationErrors);
        }
    }

    const handleAddSkill = (e) => {
        e.preventDefault();
        setSkills([...skills, inputSkillsValue]);
        setInputSkillsValue('');
    }

    const handleAddExperience = (e) => {
        e.preventDefault();
        setExperiences([...experiences, inputExperiencesValue]);
        setInputExperiencesValue('');

    }
    return (
        <div className='w-100 h-100 d-flex justify-content-center align-items-center flex-column mt-5 pt-2'>
            <div className={`${ props.mode === 'light' ? 'login-containerLightMode' : 'login-container'}`} id="loginContainer" style={{background: props.mode === 'light' ? 'rgba(39, 161, 245, 0.06)' : 'rgba(255, 255, 255, 0.1)'}}>
                <div className="login-header">
                    <h2><span>My Details</span></h2>
                </div>
                <div className="login-form">
                    <form>
                        <div className={'border p-3 rounded border-3 my-3'}>
                            <h3>Personal Details <span style={{color: 'red'}}>*</span></h3>
                            <div className="input-group">
                                <i className="fa-solid fa-user-circle"></i>
                                <input type="text" placeholder="Name" id="name" onChange={(e) => {
                                    setNameOfPerson(e.target.value)
                                }}/>
                            </div>
                            <div className="input-group">
                                <i className="fas fa-user"></i>
                                <input type="email" placeholder="Email" id="email" onChange={(e) => {
                                    setEmailOfPerson(e.target.value)
                                }}/>
                            </div>
                            <div className="input-group">
                                <i className="fa-solid fa-phone"></i>
                                <input type="tel" placeholder="Phone No." id="phone" onChange={(e) => {
                                    setPhoneNo(e.target.value)
                                }}/>
                            </div>
                        </div>
                        <div className={'border p-3 rounded border-3 my-3'}>
                            <h3>Educational Details <span style={{color: 'red'}}>*</span></h3>
                            <div className="input-group">
                                <i className="fa-solid fa-graduation-cap"></i>
                                <input type="text" placeholder="Degree Title" id="degreeTitle" onChange={(e) => {
                                    setDegreeTitle(e.target.value)
                                }}/>
                            </div>
                            <div className="input-group">
                                <i className="fa-solid fa-building-columns"></i>
                                <input type="text" placeholder="Intitute Name" id="institute" onChange={(e) => {
                                    setInstitute(e.target.value)
                                }}/>
                            </div>
                            <div className="input-group">
                                <i className="fa-solid fa-calendar-days"></i>
                                <input type="date" placeholder="Date of Compelition" id="dateOfCompletion"
                                       style={{color: 'grey', cursor: 'pointer'}} onChange={(e) => {
                                    setDateOfCompletion(e.target.value)
                                }}/>
                            </div>
                        </div>
                        <div className={'border p-3 rounded border-3 my-3'}>
                            <h3>Work Experience <span style={{color: 'red'}}>*</span></h3>
                            <div className="input-group">
                                <i className="fa-solid fa-history"></i>
                                <input type="text" placeholder="Experiences(company, position, and duration etc)"
                                       id="experiences" value={inputExperiencesValue}
                                       onChange={
                                           (e) => {
                                               e.preventDefault();
                                               setInputExperiencesValue(e.target.value);
                                           }
                                       }
                                />
                                <button className='button w-25' onClick={
                                    (e) => {
                                        handleAddExperience(e);
                                    }
                                }>
                                    <i className="fa-solid fa-plus"></i>
                                </button>
                            </div>
                            <div className={'w-100 d-flex align-items-center flex-column'}>
                                {
                                    experiences.map((experience, index) => (
                                        <p key={index}
                                           className={'skills w-auto my-1 text-center overflow-hidden'}>{experience}</p>
                                    ))
                                }
                            </div>
                        </div>
                        <div className={'border p-3 rounded border-3 my-3'}>
                            <h3>Skills <span style={{color: 'red'}}>*</span></h3>
                            <div className="input-group ">
                                <i className="fa-solid fa-list-check"></i>
                                <input
                                    type="text"
                                    id="skills"
                                    value={inputSkillsValue}
                                    placeholder="Skills"
                                    onChange={
                                        (e) => {
                                            e.preventDefault();
                                            setInputSkillsValue(e.target.value);
                                        }
                                    }
                                />
                                <button className='button w-25' onClick={
                                    (e) => {
                                        handleAddSkill(e);
                                    }
                                }>
                                    <i className="fa-solid fa-plus text-white"></i>
                                </button>
                            </div>
                            <div className={'w-100 d-flex align-items-center flex-column'}>
                                {
                                    skills.map((skill, index) => (
                                        <p key={index}
                                           className={'skills w-auto my-1 text-center overflow-hidden'}>{skill}</p>
                                    ))
                                }
                            </div>
                        </div>
                        <div className={'border p-3 rounded border-3 my-3'}>
                            <h3>Description <span style={{color: 'red'}}>*</span></h3>
                            <div className="input-group">
                                <i className="fa-solid fa-rectangle-list"></i>
                                <input type="text" placeholder="Description" id="name" onChange={(e) => {
                                    setDescription(e.target.value)
                                }}/>
                            </div>
                        </div>
                        <button id="signup" className='button' onClick={
                            (e) => {
                                handleSubmit(e);
                            }
                        }>Generate CV
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Form;