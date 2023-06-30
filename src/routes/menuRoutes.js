import { ItemDetailContainer } from "../components/pages/itemDetail/ItemDetailContainer";
import { ItemListContainer } from "../components/pages/itemList/ItemListContainer";

export const menuRoutes = [
    {
        id: "home",
        path:"/",
        Element: ItemListContainer 
    },
    {
        id: "categories",
        path:"/category/:categoryName",
        Element: ItemListContainer 
    },
    {
        id: "itemDetail",
        path:"/itemDetail/:id",
        Element: ItemDetailContainer 
    }
]