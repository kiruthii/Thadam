const Header=({label,className = "border-bottom pb-2 mb-3" })=>{
    return(
        <h5 className={className} style={{ color: "#2563eb" }}>{label}</h5>
    )
}
export default Header