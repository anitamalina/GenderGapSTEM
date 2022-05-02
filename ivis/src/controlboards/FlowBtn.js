import './../myStyle.css'

export default function flowBtn({txt, action}) {
    return (
        <button className="flowBtn" onClick={action}>
        <p className="flowBtnTxt">{txt}</p>
        </button>
    )
}

