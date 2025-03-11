/** @odoo-module */

const { Component, xml, useState } = owl  

export class SimpleMailContainer extends Component {
    setup(){
        console.log("This is a Simple Mail Container", this.props)
        this.state = useState(this.props.simple_mail)

    }
}   

export class SimpleMail extends Component {
    setup(){
        console.log("This is a Simple Mail")
        this.state = useState({
            email_to: "",
            subject: "",
            message: "",
        })
    }
}

SimpleMail.template = "owl_framework.SimpleMail"

SimpleMailContainer.template = xml`
    <div class="o_simple_mail_manager">
        <t t-if="state.isActive">
            <SimpleMail t-props="state" />
        </t>
    </div>
    `



SimpleMailContainer.components = { SimpleMail }