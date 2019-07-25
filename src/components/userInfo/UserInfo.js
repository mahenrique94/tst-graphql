import React from 'react'

import './UserInfo.css'

const UserInfo = ({ avatarUrl, bio, name, login, url, repositories }) => (
    <>
        <div className="user">
            <img className="user__picture" alt={name} src={avatarUrl} />
            <div className="user__info">
                <a className="user__name" href={url} target="_blank" rel="noopener noreferrer">
                    {name}
                </a>
                <span className="user__login">@{login}</span>
                <p className="user__bio">{bio}</p>
            </div>
        </div>
        {repositories && repositories.nodes && !!repositories.nodes.length && (
            <div className="repositories">
                {repositories.nodes.map(repository => (
                    <div className="repository" key={repository.id}>
                        <a className="repository__name" href={repository.url} target="_blank" rel="noopener noreferrer">
                            {repository.name}
                        </a>
                        <p className="repository__description">{repository.description}</p>
                        <span className="repository__language">
                            {repository && repository.primaryLanguage && repository.primaryLanguage.name}
                        </span>
                    </div>
                ))}
            </div>
        )}
    </>
)

export default UserInfo
