import React, { Component } from 'react';
import pump from '/Users/Danny/Documents/Capstone/student-portal2/src/images/insulin-pump-with-tubing.png'
import timer from '/Users/Danny/Documents/Capstone/student-portal2/src/images/download.png'
import bg from '/Users/Danny/Documents/Capstone/student-portal2/src/images/CBD-Type-2-Diabetes-What-Are-the-Benefits-and-Risks-722x406.jpg'
class AboutUs extends Component {
  render() {
    return (
      <div>
                <div class="featurette-divider container">

<div class="row featurette">
  <div class="col-md-7">
    <h2 class="featurette-heading">Site Rotations Made Easy. <span class="text-muted">It’ll blow your mind.</span></h2>
    <p class="lead">Automated timers with notifications will ensure that you dont leave a site on longer than recommended.</p>
  </div>
  <div class="col-md-5">
    <img src={pump}/>
  </div>
</div>
</div>
<div class="featurette-divider">

<div class="row featurette container">
  <div class="col-md-7 order-md-2">
    <h2 class="featurette-heading">Is this site healed?<br></br><span class="text-muted">Stop worrying!</span></h2>
    <p class="lead">The cooldown timer will let you know when a spot is still recovering from use. </p>
  </div>
  <div class="col-md-5 order-md-1">
  <br></br><br></br><br></br><br></br><br></br><img src={timer}/>
  </div>
</div>
</div>
  <div class="featurette-divider"> 
 
 <div class="row featurette container">
   <div class="col-md-7">
     <h2 class="featurette-heading"> Avoid unexpected bad sites. <br></br><span class="text-muted">No more BG highs from poor rotations. </span></h2>
     <p class="lead">Your pump should be working for you, not against. Let us help.</p>
   </div>
  <div class="col-md-5">
  <br></br><br></br><br></br><br></br><img src={bg}/>
   </div>
</div>
</div> 
<div class="featurette-divider">

</div>


<footer class="container">
<p class="float-right"><a href="/about-us">Back to top</a></p>
<p>&copy; 2019 &middot; <a divef="#">Privacy</a> &middot; <a divef="#">Terms</a></p>
</footer>
      </div>
    );
  }
}

export default AboutUs;