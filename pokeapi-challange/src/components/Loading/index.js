import React from 'react'
import { namespace } from '../../utils/_namespace'

import loading from './assets/loading.gif'

export function Loading() {
  
  return (
    <>
    <div className={`${namespace}-Loading`}>
      <img src={loading} alt="Loading..." />
    </div>
    </>
  );
}
