import React from 'react';

const Settings: React.FC = () => {
  return (
    <div>
      <h1>Settings</h1>
      <p>Manage your account settings and preferences here.</p>
      <form>
        <div>
          <label htmlFor='email'>Email Notifications</label>
          <input type='checkbox' id='email' name='email' />
        </div>
        <div>
          <label htmlFor='theme'>Theme</label>
          <select id='theme' name='theme'>
            <option value='light'>Light</option>
            <option value='dark'>Dark</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Settings;
