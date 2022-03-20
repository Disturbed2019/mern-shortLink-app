import React from "react";

export const LinkCard = ({link}) => {
    return (
        <>
            <h2>links</h2>
            <p>Your Link: <a href={link.to} target={'_blank'} rel={'noreferrer'}>{link.to}</a></p>
            <p>Where Link: <a href={link.from} target={'_blank'} rel={'noreferrer'}>{link.from}</a></p>
            <p>Counter clicks: <strong>{link.clicks}</strong></p>
            <p>Date created: <strong>{new Date(link.date).toDateString()}</strong> </p>

        </>
    )
}