import Button from '@mui/material/Button';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import Input from '@mui/material/Input';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import UTurnLeftOutlinedIcon from '@mui/icons-material/UTurnLeftOutlined';
import UTurnRightOutlinedIcon from '@mui/icons-material/UTurnRightOutlined';
import UnderlineInput from './Underlineinput';
import { IconButton } from '@mui/material';

const Header = ({control}:any) => {
    return (
        <header className="w-full bg-white border-b">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-1">
                    <div className=" mx-3.5 cursor-pointer rounded-full hover:bg-zinc-100 ">
                        <DescriptionOutlinedIcon color="primary" sx={{ fontSize: '36px' }} />
                    </div>
                    <div className="pr-1.5 cursor-pointer rounded-full">
                        <UnderlineInput
                            containerClassName="xs:inline-block w-[8rem] text-[1.25rem] text-black"
                            inputClassName="focus:border-b-2 focus:border-[#673ab7] outline-none"
                            underlineColor="#000"
                            placeHolder="제목 없는 설문지"
                            control={control}
                            name="formTitle"
                        />
                    </div>
                    <IconButton>
                        <FolderOpenIcon color="action" />
                    </IconButton>
                    <IconButton>
                        <StarOutlineOutlinedIcon color="action" />
                    </IconButton>
                </div>
                <div className="flex items-center gap-1">
                    <IconButton>
                        <PaletteOutlinedIcon color="action" />
                    </IconButton>
                    <IconButton>
                        <VisibilityOutlinedIcon color="action" />
                    </IconButton>
                    <IconButton>
                        <UTurnLeftOutlinedIcon color="action" className="rotate-90" />
                    </IconButton>
                    <IconButton>
                        <UTurnRightOutlinedIcon color="action" className="-rotate-90" />
                    </IconButton>
                    <div className="p-4"><Button type="submit" variant="contained" sx={{ width: '5.25rem' }}>보내기</Button></div>
                </div>
            </div>
            <div>
                <div className="w-[48rem] h-9 flex justify-center items-center my-0 mx-auto">
                    <button className="px-3 text-sm font-medium cursor-pointer h-full flex items-center relative">질문</button>
                    <button className="px-3 text-sm font-medium cursor-pointer h-full flex items-center">응답</button>
                </div>
            </div>
        </header>
    );
}

export default Header;