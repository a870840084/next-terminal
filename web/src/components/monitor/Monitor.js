import React, {Component} from 'react';
import Draggable from 'react-draggable';
import {Affix, Button, Col, Drawer, Dropdown, Form, Input, Menu, message, Modal, Row} from 'antd'
import './Monitor.css'
import { Gauge } from '@ant-design/charts';


class StatusMonitor extends Component {

    state = {
        assetID:"",
        docker:{},
    };

    
    render() {
        return (
            <div>

                <Gauge title="核销率" height={164} percent={87} />

            </div>
        )
    }
}

export default StatusMonitor