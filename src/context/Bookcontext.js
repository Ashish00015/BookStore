import {createContext, useContext} from "react"

const BookContext    = createContext()
const BookProvider = ({children}) => {
 return <BookContext.Provider value="temp">{children}</BookContext.Provider>
}

const useBookContext = () =>{
    return useContext(BookContext)

}
export {BookProvider,BookContext,useBookContext};
