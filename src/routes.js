import PoorTable from "./views/PoorTable";
import RichTable from "./views/RichTable";

const routes = [

    {path: '/', component: PoorTable},
    {path: '/poorTable', component: PoorTable},
    {path: '/richTable', component: RichTable}

];

export default routes;