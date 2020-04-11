import React from 'react';

function post(props) {
    return (
        <div className='post'>
            <div className='post__descr'>
                <div className='post__photo'>
                    <img src={props.photo} alt='User avatar' className='avatar' />
                </div>
                <div className='post__info'>
                    <div className="post__caption">
                        <div className='post__name'>
                            <span>{props.name}</span>
                        </div>
                        <div className='post__sign'>
                            <i className="fas fa-check-circle"></i>
                        </div>
                        <div className='post__nickname'>
                            <span>{props.nickname}</span>
                        </div>
                        <div className='post__date'>
                            <span>{props.date}</span>
                        </div>
                    </div>
                    <div className='post__content'>
                        <span>{props.content}</span>
                    </div>
                </div>
            </div>

            <div className='post__image'>
                <img src={props.image} alt="Post item" className="postImage" />
            </div>
            <div className='post__actions'>
                <div className='liked'>
                    <i className="fa fa-heart" aria-hidden="true"></i>
                    <span> {props.like}</span>
                </div>
                <div className='comment'>
                    <i className="fa fa-comment" aria-hidden="true"></i>
                    <span> {props.comments}</span>
                </div>
                <div className='share'>
                    <i className="fa fa-retweet" aria-hidden="true"></i>
                    <span> {props.share}</span>
                </div>
                <div className='save'>
                    <i className="fa fa-bookmark" aria-hidden="true"></i>
                </div>
            </div>
        </div >
    )
}

export default post;