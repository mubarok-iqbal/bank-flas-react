import { Component } from 'react'
import {Table , Card, Button} from 'react-bootstrap'
import Navigation from './../navigation/Navigation'

class Overview extends Component {
  render() {
    return (
      <>
        <Navigation
          onRouteChange = {this.props.onRouteChange}
        />
        <Card>
          <Card.Body>
            <AccountInformation />
            <Button
              onClick={() => this.props.onRouteChange('transfer')}
            >Transfer</Button>
            <TransactionTable />
          </Card.Body>
        </Card>
      </>
    )
  }
}

class AccountInformation extends Component {
  render() {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Account Number</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Muhammad Iqbal Mubarok</td>
            <td>121312</td>
            <td>100</td>
          </tr>
        </tbody>
      </Table>
    )
  }
}

class TransactionTable extends Component {
  render() {
    return (
      <>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Transaction ID</th>
              <th>From Account</th>
              <th>To Account</th>
              <th>Amount</th>
              <th>Currency</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>001</td>
              <td>123</td>
              <td>456</td>
              <td>50</td>
              <td>IDR</td>
              <td>2024-08-05</td>
            </tr>
          </tbody>
        </Table>
      </>
    )
  }
}

export default Overview; 