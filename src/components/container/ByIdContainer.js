import { connect } from 'react-redux';

import React, { Component } from 'react'
import WeatherById from '../pages/WeatherById'
class ByIdContainer extends Component {
    render() {
        return (
            <div>
                <WeatherById
                    load={this.props.load}
                    onChange={this.props.onChange}
                    show={this.props.show}
                    display={this.props.display}
                    city={this.props.city}
                    country={this.props.country}
                    app_key={this.props.app_key}
                    city_id={this.props.city_id}
                />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        city_id: state.city_id,
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ByIdContainer);