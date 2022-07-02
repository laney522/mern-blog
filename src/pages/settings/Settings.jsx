import Sidebar from '../../components/sidebar/Sidebar';
import './settings.css';

export default function Settings() {
  return (
    <div className='settings'>
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
        </div>
      </div>
      <Sidebar />
    </div>
  )
}
