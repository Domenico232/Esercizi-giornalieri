//file che crea reducer unico
// funzione PURA che genera un output pari all input




const initialState = {
    lista : {
        contentlist:[]
    },
}

const mainreducer = (state = initialState, action) => {
        //il reducer ha sempre uno switch case 
        switch (action.type) {
           
        
            default:
                return state;
        }
}
export default mainreducer;