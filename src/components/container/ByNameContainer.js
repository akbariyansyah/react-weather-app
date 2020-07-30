import { connect } from 'react-redux';

import React, { Component } from 'react'
import WeatherByName from '../WeatherByName'
class ByNameContainer extends Component {
    render() {
        return (
            <div>
                <WeatherByName
                    load={this.props.load}
                    onChange={this.props.onChange}
                    show={this.props.show}
                    display={this.props.display}
                    city={this.props.city}
                    country={this.props.country}
                    app_key={this.props.app_key}
                    onChangeCountry={this.props.onChangeCountry}
                />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        show: state.show,
        display: state.display,
        city: state.city,
        country: state.country,
        app_key: state.key

    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        load: res => dispatch({ type: 'LOAD', value: res }),
        onChange: e => dispatch({ type: "CHANGE", value: { name: e.target.name, value: e.target.value } }),
        onChangeCountry: e => dispatch({ type: "CHANGECOUNTRY", value: e.target.value })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ByNameContainer);