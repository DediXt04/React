const Events = () => {

    const handleMyEvent = (e) => {
        console.log(e);
    };

    const renderSomething = (x) => {
        if(x){
            return <h1>Isso aqui</h1>
        }else{
            return <h1>Aquilo ali</h1>
        }
    }
    return(
        <div>
            <div>
                <button onClick ={handleMyEvent}>Clique aqui! Vai!!!</button>
            </div>
            <div>
                <button onClick={() => console.log("Clicou")}>Clica aqui doidao</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )

}

export default Events;