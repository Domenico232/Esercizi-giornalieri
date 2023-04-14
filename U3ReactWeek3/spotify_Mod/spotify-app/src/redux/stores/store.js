import configurestore from "@reduxjs/toolkit"
import mainreducer from "../reducers"

const store = configurestore({
    reducer:mainreducer,
})
export default store