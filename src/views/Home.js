import "./style.css"
const Home =() => {
    return (
<>

<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://th.bing.com/th/id/R.3326e11faf9d6e456ce6e7ef66f03b1a?rik=wrKARByoT3m8Xw&pid=ImgRaw&r=0" className="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://th.bing.com/th/id/OIP.m7U6ddN63ZW6vlyC8edrugHaLP?pid=ImgDet&rs=1" className="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://picaar.com/wp-content/uploads/2019/04/avengers1..jpg" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
   </>
    )
}

export default  Home; 