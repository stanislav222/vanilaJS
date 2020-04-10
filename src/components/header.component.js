import { Component } from "../core/componen";

export class HeaderComponent extends Component {
    constructor(id) {
        super(id)
    }

    init() {
        if (localStorage.getItem('visited')) {
            this.hide()
        }
        const btn = this.$el.querySelector('.js-header-btn')
        btn.addEventListener('click', buttonHandler.bind(this))

    }
}

function buttonHandler() {
    localStorage.setItem('visited', 'true')
    this.hide()
}