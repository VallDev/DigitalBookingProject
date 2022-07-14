export const CallApi = (URL_API, config, handleCatch) => 
    fetch(URL_API,config)
    .then((response)=>{
        return response.json()
    })
    .catch((e)=>{
        if (handleCatch) {
            handleCatch();
        }else(console.log(e))
        
    });
