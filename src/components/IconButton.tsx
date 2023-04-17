const IconButton = ({children, label}:any) => {
    return (
        <div className="relative">
            <div className="w-10 h-10 cursor-pointer flex justify-center items-center rounded-full hover:bg-zinc-100 peer">{children}</div>
            <div className="absolute -bottom-6 -left-1 text-[9px] p-2 w-14 text-center text-white z-10 bg-zinc-400 rounded-[2px] peer-hover:block hidden">{label}</div>
        </div>
        
        
    )

}

export default IconButton;