import React from 'react'
import s from './Level.module.scss'

const Level = () => {
  return (
    <>
      <div className={s.level}>
        <div className="container">
          <div className={s.wrap}>

            <div className={s.card}>
              <h2>01</h2>
              <p>3D Conception <br />
              & Design</p>
            </div>
            <div className={s.card}>
              <h2>02</h2>
              <p>Interaction <br />
              & Design</p>
            </div>
            <div className={s.card}>
              <h2>03</h2>
              <p>VR World <br />
              User Testing</p>
            </div>
            <div className={s.card}>
              <h2>04</h2>
              <p>Hydra VR <br />
              Deploy</p>
            </div>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Level