import { connect } from 'react-redux';

import React, { Component } from 'react'
import WeatherByCord from '../pages/WeatherByCord'
class ByCordContainer extends Component {
    render() {
        return (
            <div>
                <WeatherByCord
                    load={this.props.load}
                    onChange={this.props.onChange}
                    show={this.props.show}
                    display={this.props.display}
                    lat={this.props.lat}
                    lon={this.props.lon}
                    app_key={this.props.app_key}
                />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        show: state.show,
        display: state.display,
        lat: state.lat,
        lon: state.lon,
        app_key: state.key
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        load: res => dispatch({ type: 'LOAD', value: res }),
        onChange: e => dispatch({ type: "CHANGE", value: { name: e.target.name, value: e.target.value } }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ByCordContainer);