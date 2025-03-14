/** @odoo-module */

import { registry } from "@web/core/registry"
import { listView } from "@web/views/list/list_view"
import { ListController } from "@web/views/list/list_controller"
import { useService } from "@web/core/utils/hooks"


const { onWillStart } = owl


class ResPartnerListController extends ListController {
    setup(){
        super.setup()
        console.log("This is res partner list controller")
        this.action = useService("action")
        this.orm = useService("orm")


        onWillStart(async ()=> {
            this.customerLocations = await this.orm.readGroup("res.partner", [], ['state_id'], ['state_id'])
            console.log(this.customerLocations)

        })
    }

    
    openSalesView(){
        console.log("Open sales view")
        this.action.doAction({
            type: "ir.actions.act_window",
            name: "Customer Sales",
            res_model: "sale.order",
            views: [[false, "list"], [false, "form"]],
        })
    }
}

export const resPartnerListView = {
    ...listView, 
    Controller: ResPartnerListController,
    buttonTemplate: "owl_framework.ResPartnerListView.Buttons",

}


registry.category("views").add("res_partner_list_view", resPartnerListView)