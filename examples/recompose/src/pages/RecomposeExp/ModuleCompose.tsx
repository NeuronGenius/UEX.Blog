import React, { ComponentType } from 'react'
import { compose, pure } from 'recompose'
import ModuleTwo from './ModuleTwo'

export const ModuleThree = (Module: ComponentType<{}>) => {
  return (
    <div>
      模块三
      <Module />
    </div>
  )
}

export default compose(
  pure,
  ModuleThree,
  ModuleTwo
)
