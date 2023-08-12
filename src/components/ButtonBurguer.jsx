
export const ButtonBurguer = (props)=>{
    return(
        <div onClick={props.handleClick} 
        className={`burguer icon nav-icon-5 ${ props.clicked? 'open' : ''}`}
        >
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}