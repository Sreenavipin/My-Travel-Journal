function Navbar(){
    return(
        <div className="navbar--container">
            <img src="./world.png" className="nav--image" />
            <span className="nav--heading">My Travel Journal</span>
        </div>
    )
}



function Place(props)
    {
        return(
<div className="Alltogether">
    <div className= "LeftSideImage">
            <img src= {props.imgUrl} className="Left--Side"/>
    </div> 
    <div className="RightSide">
           <div className= "location--part">
            <img src= "./placeholder.png" className= "placeholder" />
            <h3 className="city--name"> {props.locationn} </h3> 
            <a className='map--link' href={props.googlemapsurl}>View on Google Maps</a>
           </div>
    <div className="headingPart">
        <h1>{props.title}</h1>
    </div>
     <div className="ContentSection">
     <h4>  {props.startDate} - {props.endDate} </h4>
      <p>{props.description}</p>
    </div>       
    </div>          
</div>
        )
    }
    //hfjgfjhfjhfjg

function App() {
    return (
        <div>
<Place 
            
            title = "Mount Fuji"
            locationn= "Japan"
            googlemapsurl= "https://www.google.com/maps/place/Mount+Fuji/@35.3606233,138.7067638,14z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
            startDate ="12-January-2021"
            endDate ="24-january-2021"
            description = "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
            imgUrl = "https://images.unsplash.com/photo-1570459027562-4a916cc6113f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1888&q=80"
            />
<Place
   
            title= "Sydney Opera House"
            locationn ="Australia"
            googlemapsurl ="https://www.google.com/maps/place/Sydney+Opera+House"
            startDate ="27-May-2021"
            endDate = "08-June-2021"
            description ="The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive building"
            imgUrl ="https://images.unsplash.com/photo-1599352318473-abbc53b44a9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
 <Place
            title= "Geirangerfjord"
            locationn = "Norway"
            googlemapsurl ="https://www.google.com/maps/place/Geirangerfjord"
            startDate = "01-October-2021"
            endDate = "18-November-2021"
            description ="The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality."
            imgUrl ="https://images.unsplash.com/photo-1663150067969-59600db8fc6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=393&q=80"
        />
        </div>
    )
}
    

//gjhgjhjhgjhgjhghgjhgjh

function Apps()
{
    return (
        <div>
            <Navbar/>
            <App/>
        </div>
    )
}

ReactDOM.render ( <Apps/>, document.getElementById ("root"))
