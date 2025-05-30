import { useRef } from 'react'

import SomeCompent from './SomeCompent'

const HookUseImperativeHandle = () => {
    const inputRef = useRef()

    return (
        <div>
            <h2>useImperativeHandle</h2>
            <SomeCompent red={inputRef} />
            <button onClick={() => inputRef.current.validate()}>Validate</button>
            <hr />
        </div>
    )
}

export default HookUseImperativeHandle