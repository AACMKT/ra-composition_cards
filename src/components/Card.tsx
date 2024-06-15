import React from "react"
type Props = {
  title: string,
  text: string,
  children: React.ReactNode
}

export const Card = (props: Props) => {
    const {title, text, children}  = props
    return(
        <div className="card" style={ {width: "18rem"} }>
        { children }
        <div className="card-body">
          <h5 className="card-title">{ title }</h5>
          <p className="card-text">{ text }</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    )
}
