
export const getUsers = async() => {
    try{
        const response = await fetch('https://dummyjson.com/users')
        const data = await response.json();
        return data.users;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
      }
}

export const filterUsers = async (query:string) => {
    try {
      const response = await fetch(`https://dummyjson.com/users/search?q=${query}`);
      const data = await response.json();
      return data.users;
    } catch (error) {
      console.error('Error filtering users:', error);
      throw error;
    }
  };