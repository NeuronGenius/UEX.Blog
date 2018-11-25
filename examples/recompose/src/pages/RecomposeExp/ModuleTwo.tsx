import React, { ComponentType } from 'react'

export default ( Module: ComponentType<{}>) => {
  return (
    <div>
      模块二
      <Module />
    </div>
  )
}
