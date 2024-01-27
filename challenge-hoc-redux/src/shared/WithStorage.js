import { Component } from 'react';

const WithStorage = (WrappedComponent) => {
    class WithStorage extends Component {
        save = (key, value) => {
            localStorage.setItem(key, value);
        };

        clear = () => {
            localStorage.clear();
        };

        render() {
            return (
                <WrappedComponent
                    save={this.save}
                    clear={this.clear}
                    {...this.props}
                />
            );
        }
    }
    return WithStorage;
};

export default WithStorage;
