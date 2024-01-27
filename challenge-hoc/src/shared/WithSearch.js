import { Component } from 'react';

const WithSearch = (WrappedComponent) => {
    class WithSearch extends Component {
        constructor(props) {
            super(props);
            this.state = {
                key: '',
            };
        }

        handleSearch = (event) => {
            this.setState({ key: event.target.value });
        };

        filter = (key) => {
            key = key.toLowerCase();
            let filteredProducts = this.props.data.filter((product) =>
                product.productName.toLowerCase().includes(key)
            );

            return filteredProducts;
        };

        render() {
            let { key } = this.state;
            let filteredProducts = this.filter(key);
            // console.log(this.props.data);
            return (
                <div>
                    <input
                        onChange={this.handleSearch}
                        value={this.state.key}
                        type="text"
                        placeholder="Search"
                    />
                    <WrappedComponent data={filteredProducts} />
                </div>
            );
        }
    }
    console.log(
        'Before -> ',
        'name : ',
        WithSearch.name,
        ',display name : ',
        WithSearch.displayName
    );

    WithSearch.displayName = `WithSearch(${getDisplayName(WrappedComponent)})`;

    console.log(
        'After -> ',
        'name : ',
        WithSearch.name,
        ',display name : ',
        WithSearch.displayName
    );

    return WithSearch;
};

const getDisplayName = (WrappedComponent) => {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};

export default WithSearch;
