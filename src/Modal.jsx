import "./Modal.css";

const Model = (props) => {
  return (
    <>
      <div onClick={ props.onClose} className="backdrop">
          <div className="modal">
              <h2>{props.title}</h2>
             <p>{props.message}</p>
             <button onClick={props.onClose}>Okay</button>
          </div>
      </div>
    </>
  )
}

export default Model
