import GeaLogo from './assets/GEALogo.svg'
import './App.css'

export default function CheckListHeader() {
    return (
        <div className='headerLayout'>
            <img src={GeaLogo} className="headr-logo" alt="gea logo" />
            <h1 >NLX Work Checklist</h1>
        </div>
    )
}