import React from 'react';
import image from './logo192.png'


const MenuCard = ({ menuData }) => {
    console.log(menuData);
    return (
        <>
            <section className='main-card--container'>
                {
                    menuData.map((curEle) => {
                        return (
                            <>
                                <div className="card-container" key={curEle.id}>
                                    <div className="card">
                                        <div className="card-body">
                                            <span className="card-number card-circle subtle">{curEle.id}</span>
                                            <span className="card-author subtle">{curEle.name}</span>
                                            <h2 className="card-title">{curEle.name}</h2>
                                            <span className="card-description subtle">{curEle.description}</span>
                                            <div className="card-read">Read</div>
                                        </div>
                                        {/* <img src={curEle.image} alt="food images" className="card-media"/> */}
                                        <img src={image} alt="Girl in a jacket"  className="card-media" />
                                        <span className="card-tag subtle">Order Now</span>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </section>

        </>
    )
}

export default MenuCard;