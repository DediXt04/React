import React from 'react'

import { useContext } from 'react'
import { SomeContext } from '../components/HookUseContext'

import HookUseState from '../components/HookUseState'
import HookUseReducer from '../components/HookUseReducer'
import HookUseEffect from '../components/HookUseEffect'
import HookUseRef from '../components/HookUseRef'
import HookUseCallback from '../components/HookUseCallback'
import HookUseMemo from '../components/HookUseMemo'
import HookUseLayoutEffect from '../components/HookUseLayoutEffect'
import HookUseImperativeHandle from '../components/HookUseImperativeHandle'
import HookCustom from '../components/HookCustom'




const Home = () => {
        const {contextValue} = useContext(SomeContext)


    return (
        <div>
            <HookUseState />
            <HookUseReducer />
            <HookUseEffect />
            <h2>UseContext</h2>
            <p>Valor do context: {contextValue}</p>
            <hr />
            <HookUseRef/>
            <HookUseCallback/>
            <HookUseMemo/>
            <HookUseLayoutEffect/>
            <HookUseImperativeHandle/>
            <HookCustom/>
        </div>
    )
}

export default Home