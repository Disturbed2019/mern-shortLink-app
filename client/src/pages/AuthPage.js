import React, {useEffect, useState, useContext} from "react";
import {useHttp} from "../hooks/httpHook";
import {useMessage} from "../hooks/messageHook";
import {AuthContext} from "../context/AuthContext";

export const AuthPage = () => {
    const auth = useContext(AuthContext)
    const message = useMessage()
    const {loading, error, request, clearError} = useHttp()
    const [form, setForm] = useState({
        email:'',
        password:''
    })

    useEffect(() => {
        message(error);
        clearError()
    },[error,message, clearError])

    useEffect(()=> {
        window.M.updateTextFields()
    },[])

    const changeHandler = (e) => {
        setForm({...form, [e.target.name]: e.target.value })
    }

    const registerHandler = async () => {
        try{
            const data = await request('/api/auth/register', 'POST', {...form})
            message(data.message)
        } catch (e) {

        }
    }
    const loginHandler = async () => {
        try{
            const data = await request('/api/auth/login', 'POST', {...form})
            auth.login(data.token, data.userId)
        } catch (e) {

        }
    }


    return (
        <div className='row'>
            <div className="col s6 offset-s3">
                <div className="card blue darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Авторизация</span>
                        <div>
                            <div className="input-field ">
                                <input
                                    // placeholder="Введите email"
                                    id="email"
                                    type="text"
                                    name="email"
                                    value={form.email}
                                    className='yellow-input'
                                    onChange={changeHandler}
                                />
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="input-field ">
                                <input
                                    // placeholder="Введите пароль"
                                    id="password"
                                    type="password"
                                    name="password"
                                    className='yellow-input'
                                    value={form.password}
                                    onChange={changeHandler}
                                />
                                <label htmlFor="password">Password</label>
                            </div>

                        </div>
                    </div>
                    <div className="card-action">
                        <button
                            className="btn yellow darken-4"
                            style={{marginRight:10}}
                            disabled={loading}
                            onClick={loginHandler}
                        >Воити</button>
                        <button
                            className="btn grey lighten-1 black-text"
                            onClick={registerHandler}
                            disabled={loading}
                        >Регистрация</button>
                    </div>
                </div>
            </div>
        </div>
    )
}