import React, {useContext, useEffect, useState} from "react";
import {useHistory} from 'react-router-dom'
import {useHttp} from "../hooks/httpHook";
import {AuthContext} from "../context/AuthContext";

export const CreatePage = () => {
    const history =  useHistory()
    const auth = useContext(AuthContext)
    const {request} = useHttp()
    const [link, setLink] = useState('')

    useEffect(()=> {
        window.M.updateTextFields()
    },[])

    const pressHandler = async (e) => {
        if (e.key === 'Enter'){
            try {
                const data = await request('/api/link/generate', 'POST', {from: link},{
                    Authorization: `Bearer ${auth.token}`
                })
                history.push(`/detail/${data.link._id}`)

            } catch (e) {

            }
        }
    }

    return (
        <div className={'row'}>
            <div className="col s8 offset-s2" style={{paddingTop:'2rem'}}>
                <h1>CreateLink</h1>
                <div className="input-field ">
                    <input
                        // placeholder="Введите email"
                        id="link"
                        type="text"
                        value={link}
                        onChange={e => setLink(e.target.value)}
                        onKeyPress={pressHandler}
                    />
                    <label htmlFor="email">Enter Link</label>
                </div>
            </div>
        </div>
    )
}