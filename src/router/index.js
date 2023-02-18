import{createRouter,createWebHistory} from "vue-router"
import CategoriesView from "@/components/CategoriesView"
import LoginView from "@/components/LoginView"
// import BigCards from "@/components/BigCards"
// import NewsCards from"@/components/NewsCards"
import AdminView from "@/components/AdminView"
import CreateArticle from"@/components/CreateArticle"
import CreateCategory from"@/components/CreateCategory"
import DeleteArticle from"@/components/DeleteArticle"
import CategoryNews from"@/components/CategoryNews"
import FullArticle from"@/components/FullArticle"
import UpdateArticle from"@/components/UpdateArticle"


const router=createRouter({
    history: createWebHistory(),
    routes: [
        {
        path: '/',
        name: 'loginView',
        component: LoginView
        },
        {
            path: '/admin',
            name: 'AdminView',
            component: AdminView
            },
        {
            path: '/categoriesView',
            name: 'CategoriesView',
            component: CategoriesView
        },
        {
            path: '/createArticle',
            name: 'CreateArticle',
            component: CreateArticle
        },
        {
            path: '/createCategory',
            name: 'CreateCategory',
            component: CreateCategory
        },
        {
            path: '/deleteArticle',
            name: 'DeleteArticle',
            component: DeleteArticle
        },
        {
            path: '/updateArticle',
            name: 'UpdateArticle',
            component: UpdateArticle
        },
        {
            path: '/categoriesView/:name',
            name: 'CategoryNews',
            component: CategoryNews
        },
        {
            path: '/article/:id',
            name: 'FullArticle',
            component: FullArticle
        }

     ]
   })
 
export default router