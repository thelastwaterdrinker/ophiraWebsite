'use client';

interface DropdownMenuItemProps {
    onClick: () => void;
    label: string;
}

const DropdownMenuItem: React.FC<DropdownMenuItemProps> = ({onClick, label}) => {
    return (
        <div 
            onClick={onClick}
            className= "px-4 py-3 hover:bg-neutral-100 transition font-bold">
                {label}
        </div>
    );
}

export default DropdownMenuItem;