import * as React from 'react'
import { render } from 'react-dom'
import MeetingHome from './components/meeting-home'
import MeetingList from './components/meeting-list'
import { Toasts } from '@target-energysolutions/toast'


export const App = () => {
	return <div>hello world<MeetingHome /><MeetingList /><Toasts /></div>
}

render(<App />, document.getElementById('root'));