

export const CustomButton =({handleClick,text, bg}) =>{

    return(
    <>
    <button style={{background:bg ? bg : 'pink'}} onClick={handleClick}>
    {text}
    </button>
    </>
    )
    
    }
    