import React, { Component } from 'react'; //imrc
class Counter extends Component {//cc
    /*state = {
        value: this.props.counter.value
        //tags: ['tag1','tag2']
    };*/
    
    /*renderTags() {
        if (this.state.tags.length === 1) return <p>There are no tags!</p>;

        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>; //rendering list
    }
    
    //binding event handlers using arrow function
    handleIncrement = () => {
        console.log("Increment initiated!", this);
        this.setState({ value: this.state.value + 1 });
    };
    doHandleIncrement= () =>{
        this.handleIncrement({ id: 1 });
    }*/

    render() { 
        console.log(this.props)
        return (
            <div>
                {/*<h5>{ this.props.id}</h5>
                {this.props.children}*/}
                <span className={this.getBadgeClass()}>{this.formatCount()}</span> {/*rendering class*/}
                <button
                    onClick={()=> this.props.onIncrement(this.props.counter) }
                    className="btn btn-secondary btn-sm"
                >Increment</button>
                <button
                    onClick={()=> this.props.onDelete(this.props.counter.id) }
                    className="btn btn-danger btn-sm m-2">Delete</button>
                {/*{this.state.tags.length === 1 && 'There is only one tag'} {/*conditional remdering*/}
                {/*{this.renderTags()}*/}
            </div>
        );
    }
getBadgeClass() {
        let classes = "badge m-3 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
}
    formatCount() {
        const { value: count } = this.props.counter;//destructuring
        //return this.state.count === 0 ? 'Zero' : this.state.count;(usual method)
        return count === 0 ? 'Zero' : count;
    }
    
}
 
export default Counter;