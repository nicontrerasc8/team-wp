import React, { useEffect } from 'react'

const Index = () => {
    useEffect(() => {
        console.log("Habla")
    }, [])
    return (
        <footer>
            <h2>Síguenos en: </h2>
            <a target="blank" href="https://www.instagram.com/team_waterpolo/"><i className="fab fa-instagram"></i></a>
            <a target="blank" href="https://www.facebook.com/teamwaterpolo2020"><i className="fab fa-facebook-f"></i></a>
        </footer>
    )
}

export default Index
