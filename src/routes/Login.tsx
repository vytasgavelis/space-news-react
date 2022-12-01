import { useState } from 'react';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(event: any) {
        event.preventDefault();
    }

    function isFormValid(): boolean {
        return username !== '' && password !== '';
    }

    return (
        <div className="login">
            <div className="container">
                <div className="form green-border">
                    <h1 className="form__header">Login</h1>
                    <form onSubmit={handleSubmit}>
                    <div><label>Username</label></div>
                    <div>
                        <input type="text" name="username" id="username"
                               value={username} onChange={e => setUsername(e.target.value)}
                        />
                    </div>
                    <div><label >Password</label></div>
                    <div>
                        <input type="password" name="password" id="password"
                               value={password} onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <button disabled={isFormValid()} className="form__button">Submit</button>
                    </div>
            </form>
        </div>
</div>
        </div>
    );
}