const IconButton = ({children}:any) => {

    return (
        <div className="group/icon-button w-10 h-10 cursor-pointer flex justify-center items-center rounded-full hover:bg-zinc-100">
            {children}
        </div>
    )

}

export default IconButton;