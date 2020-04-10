import { Component } from "../core/componen"


export class NavigationComponent extends Component {
    constructor(id) {
        super(id)

        this.tabs = []
    }

    init() {
        this.$el.addEventListener('click', tabClickHeandler.bind(this))
    }

    listTabs(tabs){
        this.tabs = tabs
    }
}

function tabClickHeandler(event) {
    event.preventDefault()

    if (event.target.classList.contains('tab')) {
        Array.from(this.$el.querySelectorAll('.tab')).forEach(tab => {
            tab.classList.remove('active')
        })
        event.target.classList.add('active')

        const showTabs = this.tabs.find(tab => tab.name === event.target.dataset.name)
        this.tabs.forEach(tab => tab.component.hide())
        showTabs.component.show()
    }
} 