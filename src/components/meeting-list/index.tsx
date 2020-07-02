import * as React from 'react';
import './styles.scss'
import { useToast } from '@target-energysolutions/toast'

// const { useState, useCallback, useRef } = React

const MeetingList: React.FunctionComponent = () => {
  
console.log('this was refeshed')
const showToast = useToast()
  return (
      <div className="app--meeting-list-container">
        I am tes
        <button onClick={() => showToast({ type: 'confirm', text: 'hello world'})}>add a toast</button>
      </div>
    )
};

export default MeetingList;

