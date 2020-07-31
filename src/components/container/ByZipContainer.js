import { connect } from 'react-redux';

import React, { Component } from 'react'
import WeatherByZip from '../WeatherByZip'
class ByZipContainer extends Component {
    render() {
        return (
            <div>
                <WeatherByZip
                    load={this.props.load}
                    onChange={this.props.onChange}
                    show={this.props.show}
                    display={this.props.display}
                    city_zip={this.props.city_zip}
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
        city_zip: state.city_zip,
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

export default connect(mapStateToProps, mapDispatchToProps)(ByZipContainer);