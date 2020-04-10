import { HeaderComponent } from "./components/header.component";
import { NavigationComponent } from "./components/navigation.component";
import { CreateComponent } from "./components/create.component";
import { PostsComponent } from "./components/posts.component";
import { FavouriteComponent } from "./components/favorite.component";



new HeaderComponent('header')

const navigation = new NavigationComponent('navigation')

const create = new CreateComponent('create')
const posts = new PostsComponent('posts')
const favorite = new FavouriteComponent('favorite')

navigation.listTabs([
    {name: 'posts', component: create},
    {name: 'create', component: posts},
    {name: 'favorite', component: favorite}    
])



