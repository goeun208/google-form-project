const IconButton = ({children, label}:any) => {
    return (
        <div>
            <div className="w-10 h-10 cursor-pointer flex justify-center items-center rounded-full hover:bg-zinc-100 relative peer">{children}</div>
            <div className="absolute -bottom-6 text-[9px] px-2 w-12 text-center text-white z-10 bg-zinc-400 rounded-[2px] peer-hover:block hidden">{label}</div>
        </div>
        
        
    )

}

export default IconButton;