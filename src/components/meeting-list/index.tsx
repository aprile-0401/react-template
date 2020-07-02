import * as React from 'react';
import './styles.scss'
import { useToast } from '@target-energysolutions/toast'
import { map } from 'lodash-es'

// const { useState, useCallback, useRef } = React
const themes = ['red', 'yellow', 'black']
const MeetingList: React.FunctionComponent = () => {
  
console.log('this was refeshed')
const showToast = useToast()
  return (
      <div className="app--meeting-list-container">
        I am tes
        <button onClick={() => showToast({ type: 'confirm', text: 'hello world'})}>add a toast</button>
        {
          map(themes, (item: string) => <span>{item}</span>)
        }
      </div>
    )
};

export default MeetingList;

