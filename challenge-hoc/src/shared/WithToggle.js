import { Component } from 'react';

const WithToggle = (WrappedComponent) => {
    class WithToggle extends Component {
        state = {
            toggleStatus: false,
        };
        toggle = () => {
            this.setState({
                toggleStatus: !this.state.toggleStatus,
            });
        };

        render() {
            return (
                <WrappedComponent
                    {...this.props}
                    toggle={this.toggle}
                    toggleStatus={this.state.toggleStatus}
                />
            );
        }
    }
    // console.log('Before -> ', 'name : ', WithToggle.name, ',display name : ', WithToggle.displayName);

    WithToggle.displayName = `WithToggle(${getDisplayName(WrappedComponent)})`;

    // console.log('After -> ', 'name : ', WithToggle.name, ',display name : ', WithToggle.displayName);

    return WithToggle;
};

const getDisplayName = (WrappedComponent) => {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};

export default WithToggle;
