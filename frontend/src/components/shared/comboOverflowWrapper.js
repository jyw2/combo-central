import "styles/customScrollbar.css";

export default function ComboOverflowWrapper(props) {
    return (
        <div className="custom-scroll-container" style={{ overflow: "auto", width: "100%", paddingBottom: "5px", marginBottom: "10px" }}>{
            props.children
        }</div>
    )
}