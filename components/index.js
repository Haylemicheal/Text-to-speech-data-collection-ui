import useRecorder from "./useRecorder";
const axios = require('axios').default;

const baseUrl = `http://127.0.0.1:5000`;
function App() {
    let [audioURL, isRecording, startRecording, stopRecording] = useRecorder();
    return (
      <div className="App">
        <audio id="audio" src={audioURL} controls />
        <br/>
        <button className="btn btn-success rounded-pill" onClick={startRecording} disabled={isRecording}>
        ጀምር
        </button>
        <button className="btn btn-danger rounded-pill" onClick={stopRecording} disabled={!isRecording}>
        ዝጋ
        </button>
      </div>
    )
}
function generate() {
    let category = document.getElementById("selectvalue").value
    axios.get(`${baseUrl}/news/${category}`)
    .then(function (response) {
        document.getElementById("generated").innerHTML = response.data.news.headline;
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(function () {
        // always executed
    });
}

function setAudio() {
    let blob = document.getElementById("audio").src
    axios.get(blob)
    .then(function (response) {
        console.log(response.data)
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(function () {
        // always executed
    });
}
export default function Recording() {
    return(
        <div>
            <div className="container">
                <div className="row">
                <select id="selectvalue" className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                    <option value="localnews">ሀገር አቀፍ ዜና</option>
                    <option value="internationalnews">ዓለም አቀፍ ዜና</option>
                    <option value="sport">ስፖርት</option>
                    <option value="business">ቢዝነስ</option>
                    <option value="entertainment">መዝናኛ</option>
                </select>
                <div className="col text-center">
                    <button className="btn btn-primary" onClick={generate}>ፅሁፍ አምጣ</button>
                </div>
                </div>
                <div>
                    <h2 className="text-center text-primary" id="generated"></h2>
                </div>
                <div className="record-button-container text-center mt-5">
                <h2 className="text-center text-primary">ድምጽወትን ይቅረጹ</h2>
                <button className="bg-transparent border btn record-button rounded-circle shadow-sm text-center mb-2">
                    <img src="/images/microphone.png" alt="Record" className="img-fluid" />
                </button>
                <App />
                <button className="btn btn btn-primary mt-3" onClick={setAudio}>ላክ</button>
                </div>
            </div>
            </div>
    );
}