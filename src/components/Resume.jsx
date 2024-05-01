import { usePDF } from 'react-to-pdf';

const Resume = ({mode}) => {
    const data = JSON.parse(localStorage.getItem('userData'));
    const { toPDF, targetRef } = usePDF({filename: `${data.nameOfPerson}.pdf`});
    return (
        <div className={'mb-5'}>
            <div className="col-6 my-5 mx-auto text-center">
                <button className="button mt-5" onClick={() => toPDF()}>Download</button>
            </div>
            <div className={'overflow-x-scroll w-100'} style={
                {
                    scrollbarWidth: 'none',
                }}>
            <div className='bg-white text-dark shadow-lg mx-auto p-0'
                 style={{
                     fontFamily: 'sans-serif',
                     width: '900px',
                     height: '1000px',
                 }}
                 id='resume'
                 ref={targetRef}
            >
                <div className="bg-info p-5" >
                    <div className="">
                        <h1 className={'text-center'}>{data.nameOfPerson}</h1>
                        <p className={'text-center'}>
                            {data.emailOfPerson} | {data.phoneNo}
                        </p>
                    </div>
                </div>
                <div className="row px-3 mt-4">
                    <div className="col-md-12">
                        <h3>SUMMARY</h3>
                        <p className='px-3'>
                            {data.description}
                        </p>
                    </div>
                </div>
                <div className="row px-3">
                    <div className="col-12">
                        <h3>SKILLS</h3>
                        <ul>
                            {
                                data.skills.map((skill, index) => (
                                    <li key={index}>{skill}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="row px-3">
                    <div className="col-12">
                        <h3>EDUCATION</h3>
                        <p className='px-3'>{data.degreeTitle} from {data.institute} | {data.dateOfCompletion}</p>
                    </div>
                </div>
                <div className="row px-3">
                    <div className="col-12">
                        <h3>EXPERIENCE</h3>
                        <ul>
                        {
                            data.experiences.map((experience, index) => (
                                <li key={index}>{experience}</li>
                            ))
                        }
                        </ul>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Resume;
