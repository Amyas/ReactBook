/**
 * Created by Amyas on 17-6-7.
 */
import React, { Component, PropTypes } from 'react';
import ThemeSwitch from './ThemeSwitch';

class Content extends Component {
    render() {
        return (
            <div>
                <p>COntent</p>
                <ThemeSwitch/>
            </div>
        )
    }
}

export default Content;