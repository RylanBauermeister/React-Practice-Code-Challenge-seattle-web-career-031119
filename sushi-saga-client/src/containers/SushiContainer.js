import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          props.sushis.slice(0,5).map(sushi => {
            return <Sushi eatSushi={props.eatSushi} sushi={sushi} eaten={props.eaten}/>
          })
        }
        <MoreButton showMoreSushi={props.showMoreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
