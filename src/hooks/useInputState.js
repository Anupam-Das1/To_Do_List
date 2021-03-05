import {useState} from "react"
function useFormState(initialVal=false) {
    const [state, setState] = useState(initialVal)
    const handleChange = (e) => {
        setState(e.target.value)
    }

    const reset= () => {
        setState("")
    }
    return [state,handleChange,reset]
}
export default useFormState;