import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'

import { WithI18n, Trans } from 'lingui-react'

export const HomeView = ({ i18n }) => (
  <div>
    <h4><Trans>Welcome!</Trans></h4>
    <h4>{i18n.t`Welcome!`}</h4>
    <img alt={i18n.t`This is a duck, because Redux!`} className='duck' src='/missing' />
  </div>
)

export default WithI18n()(HomeView)


/*

// THIS DOES NOT WORK EITHER

import { i18n } from 'lingui-i18n'

export const HomeView = () => (
  <div>
    <h4><Trans>Welcome!</Trans></h4>
    <h4>{i18n.t`Welcome!`}</h4>
    <img alt={i18n.t`This is a duck, because Redux!`} className='duck' src='/missing' />
  </div>
)

export default HomeView

*/
