import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Info() {
    return (
        <div className='info'>
            <img className="info__image" src="https://media-exp1.licdn.com/dms/image/C4E03AQELxdWgQlMXJw/profile-displayphoto-shrink_800_800/0/1584474527353?e=1670457600&v=beta&t=phfu786JqyELmBK2HeB0UcFNm2mxkxXPym8m2nqquYc" />
            <div className='container'>
                <h1 className="info__name">Derrick Ray</h1>
                <h2 className="info__title">Sitecore Developer</h2>
                <a className="info__website" href="#">drayconcepts.com</a>
                <a  className="info__email" href="mailto:dray@drayconcepts.com?subject=Mail from your business card">
                    <FontAwesomeIcon icon={faEnvelope} />
                    Email
                </a>
            </div>
        </div>
    )
}