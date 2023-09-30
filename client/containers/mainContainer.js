import React from "react";
import Rows from "../components/row";
import Footer from "../components/footer";
import '../styles/footer.css'
import '../styles/container.css'

function AppendRows() {
  return (
    <div className="rows-in-container">
    <Rows/>
    </div>
  )
}

export default AppendRows;