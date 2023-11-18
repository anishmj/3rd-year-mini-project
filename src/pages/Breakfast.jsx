import React from 'react'

function Breakfast() {
  return (
  
        <div class="main">
        <nav class="navbar navbar-expand-lg navbar-light bg-light shadow tabb">
            <a class="navbar-brand" href="#">
                <div class="d-flex flex-row">
                    <img class="logo" src="https://res.cloudinary.com/dm6wjacnw/image/upload/v1697659320/re3hzodscsydhai6jsie.png"/>
                    <center>
                        <h1 class="cooking-pal-heading card-heading-pal">Cooking Pal</h1>
                    </center>
                </div>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav m-auto">
                    <a class="inner " href="/">Home<span class="sr-only">(current)</span></a>
                    <a class="inner " href="aboutuspage.html">About us<span class="sr-only">(current)</span></a>
                    <h1 class="inner card-heading cooking-pal-head">COOKING PAL</h1>
                    <a class="inner " href="contactuspage.html">Contact Us<span class="sr-only">(current)</span></a>
                    <a class="inner " href="productspage.html">Products<span class="sr-only">(current)</span></a>
                    <a class="inner " href="productspage.html">Cart<span class="sr-only">(current)</span></a>
                </div>
            </div>  
        </nav>
        <h1 class="card-heading text-center mt-3"><u>Breakfasts</u></h1>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="corosal-class">                  
                            <div id="carouselExampleControls" class="carousel slide corosal-items-inside"  data-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <div class="container marginnnn">
                                            <div class="corosal-items-inside-inside" style={{backgroundImage:"url(https://res.cloudinary.com/dm6wjacnw/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1699081248/m3colqienewvqarpxqp3.png)"}}>
                                                <h1 class="item-heading">Idli</h1>
                                                <a href="breakfast1"><center><button class="card-button">Let's Cook</button></center></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div class="container marginnnn">
                                            <div class="corosal-items-inside-inside" style={{backgroundImage:"url(https://res.cloudinary.com/dm6wjacnw/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1699075121/rghdafqtgwrl5p33tmyg.png)"}}>
                                                <h1 class="item-heading">Dosa</h1>
                                                <a href="breakfast2"><center>
                                                    <button class="card-button">Let's Cook</button>  </center></a>
                                                  
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div class="container marginnnn" >
                                            <div class="corosal-items-inside-inside" style={{backgroundImage:"url(https://res.cloudinary.com/dm6wjacnw/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1699081248/m3colqienewvqarpxqp3.png)"}}>
                                                <h1 class="item-heading">Poori</h1>
                                                <a href="breakfast3"><center><button class="card-button">Let's Cook</button></center></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>

  )
}

export default Breakfast