import { useState, useRef } from "react";
import { Button } from "@consta/uikit/Button";
import { ContextMenu } from "@consta/uikit/ContextMenu";
import { useNavigate } from "react-router-dom";
import { IconArrowDown } from "@consta/icons/IconArrowDown";

type Item = {
    label: string;
  };
  
  const items: Item[] = [
    {
      label: "Задание 1",
     
    },
    {
      label: "Задание 2",
    },
   ]

function ContextMenuz() {
    const navigate = useNavigate();
    const ref = useRef(null);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    function getItemOnClick (item:Item) {
        let path:string
        item.label === "Задание 1" ? path = "task1" : path = "task2";
        return () => navigate(`/${path}`)
    }
    return ( 
        <>
        <Button
        iconRight={IconArrowDown}
        ref={ref}
        label="Задания"
        onClick={() => setIsOpen(!isOpen)}
        />
        <ContextMenu
          role="menu"
          size="s"
          items={items}
          isOpen={isOpen}
          anchorRef={ref}   
          onClickOutside={() => setIsOpen(false)}
          getItemOnClick={getItemOnClick}  
        />
        </>
     );
}

export default ContextMenuz;