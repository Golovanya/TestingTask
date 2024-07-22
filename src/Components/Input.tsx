import { TextField,   } from '@consta/uikit/TextField';
type inputProps = {
    setSearch: (newCode: string | null) => void,
    search: string | null
}
export const Input = ({setSearch,search}: inputProps) => {
    const handleChange  = (value:string|null ) => {
        setSearch(value);
      };
    return (  
        <TextField
            value={search}
            onChange={handleChange}
            placeholder="Поиск по имени..."
        />
    );
}

