import React from 'react'

export default function Home() {
    return (
        <>
            <div className="carousel-item active align-middle">
                <img className="  mh-100 " src="https://www.pacifictimesheet.com/hubfs/barcode-scanning-app.jpg" alt="First slide" />
            </div>
            <section className="hero is-dark">
                <div className="hero-body">
                <h1 className="has-text-warning">How <strong className="has-text-warning">easyStock</strong> works?</h1>
                    <figure className="image is-256x256"  >
                        
                        <img className="" src="http://www.small-business-inventory-management.com/images/solutions/mobile-stocktaking-physical-inventory.png" 
                        alt="cell" 
                        width="200rem"  /><br/>
                        
                    </figure>
                </div>
            </section>
        </>
    )
}
