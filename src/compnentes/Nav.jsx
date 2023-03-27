import React from "react";

export default function Nav() {
  return (
    <div>
      <nav class="navbar navbar-expand-sm ">
        <div class="container-fluid justify-content-end">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link text-light" href="#">
                HOME |
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="#">
                PIZZAS |
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="#">
                RESTAURANTE |
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="#">
                CONTATO
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
