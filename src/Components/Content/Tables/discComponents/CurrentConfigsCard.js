import React, { Component } from "react";

import {Card, Table} from "react-bootstrap"

import "../../../../resources/style/colors.css"

class CurrentConfigsCard extends Component{

    // state = {
    //     DiscretizationTable: [],
    // };
    //
    // constructor(props) {
    //     super(props);
    //     // Don't call this.setState() here!
    //     this.state = {  DiscretizationTable: DiscretizationData,
    //     }
    // }

    //<editor-fold desc="Sub-Components">

    CurrConfigHeadElement = (
        <Card.Header className={"bg-hugobot"}>
            <Card.Text className={"text-hugobot"}>
                Use an Existing Configuration
            </Card.Text>
        </Card.Header>
    );

    CurrentConfigurationsElement = (
        <Table striped={true} hover={true}>
            <tr>
                <th>PAA Window Size</th><th>Method</th><th>Bins number/States file</th><th>Interpolation </th>
            </tr>
            <tr>
                <td>1</td><td>Equal Frequency</td><td>1</td><td>1</td>
            </tr>
            <tr>
                <td>1</td><td>Sax</td><td>2</td><td>1</td>
            </tr>
            <tr>
                <td>1</td><td>Equal Width</td><td>3</td><td>1</td>
            </tr>
        </Table>
    );
    //</editor-fold>

    render() {
        return (
            <Card style={{ width: 'auto' }}>
                {this.CurrConfigHeadElement}
                <Card.Body>
                    {this.CurrentConfigurationsElement}
                </Card.Body>
            </Card>
        );
    }
}
export default CurrentConfigsCard;