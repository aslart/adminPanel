import React from 'react';

export default function Auth() {
  return (
    <div>
      <div className="authTitle">
        <p>Authorization</p>
      </div>
      <div className="formWrapper">
        <form>
          <div className="authItem">
            <label>Username</label>
            <input type="text" placeholder="john" />
          </div>
          <div className="authItem">
            <label>Password</label>
            <input type="password" placeholder="john" />
          </div>
          <button>Log In</button>
        </form>
      </div>
    </div>
  );
}
