import Home from  './components/Home/Home.vue'
import Profile from  './components/Profile/Profile.vue'
import ProfileCenter from  './components/Profile/Profile-center.vue'
import Review from  './components/Review/Review.vue'
import Circle from './components/Circle/Circle.vue'
import Group from './components/Circle/Group.vue'



export const routes=[
    {path: '/', component: Home},
    {path: '/Profile', component: Profile},
    {path: '/ProfileCenter', component: ProfileCenter},
    {path: '/review', component: Review},
    {path: '/circle', name: 'circle', component: Circle, children:[
        {path:':select', component: Group}
    ]},
    
]