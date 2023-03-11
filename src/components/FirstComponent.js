import { Component } from "react";
import _ from "lodash";
class FirstComponent extends Component {
    constructor(props) {
        super(props)
        this.object = {
            test: 21
        }
    }

    componentDidMount() {
        let localVariable = _.cloneDeep(this.object);
        console.log(this.object)
        localVariable.test = 30;
        console.log(this.object)
    }

    render() {
        return (
            <div>
                Message From Component!
            </div>
        )
    }
}

export default FirstComponent;