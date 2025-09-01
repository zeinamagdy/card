import qrCode from "./assets/qr-code.png";
import "./App.css";

function App() {
  return (
    <>
      <div className="card">
        <img src={qrCode} className="card-qr-code" alt="qr-code" />
        <div className="card-text">
          <h1>Improve your front-end skills by building projects</h1>
          <p>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
