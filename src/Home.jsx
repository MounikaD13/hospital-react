import React from 'react'
import './Home.css'
export default function Home() {
  return (
    <div>
      <div class='image'>
        <h1>Making Health Care Better Together</h1>
        <p>Behind every cure is a caring heart. We believe in working hand in hand to bring comfort, trust, and hope to every patient.</p>
      </div>
      <div class="everyday text-center mt-4">
        <h2>Why Choose Us</h2>
      </div>
      <div class="row everyday text-center g-2">
        <div class="col-md-3">
          <div class="cardlast">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3-0yXpqcuerfAHI0V4Is0lHs5op07nuVkuw&s" alt="" />
            <h5>Experience</h5>
            <p>2L+operations</p>
          </div>
        </div>
        <div class="col-md-3">
          <div class="cardlast">
            <img src="https://www.shutterstock.com/image-vector/expert-icon-element-design-260nw-2657938471.jpg" alt="" />
            <h5>Expertise</h5>
            <p>Over 25 years of practice</p>
          </div>
        </div>
        <div class="col-md-3">
          <div class="cardlast">
            <img src="https://static.vecteezy.com/system/resources/previews/034/590/486/non_2x/every-time-icon-open-24-7-icon-on-white-background-symbol-from-blue-icon-set-vector.jpg" alt="" />
            <h5>24 Hours Service</h5>
            <p>Medical Assistance around the Clock</p>
          </div>
        </div>
        <div class="col-md-3">
          <div class="cardlast">
            <img src="https://2andararq.com.br/wp-content/uploads/2024/07/experiencia.png" alt="" />
            <h5>Awards</h5>
            <p>Best Hospital in the city for 5 yrs</p>
          </div>
        </div>
      </div>
    </div>
  )
}
