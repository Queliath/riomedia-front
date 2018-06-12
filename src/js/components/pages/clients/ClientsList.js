import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchClients } from '../../../state/actions/ClientsActions';
import {ClientCard} from "./ClientCard";

class ClientsListConnected extends Component {

    render() {
        let clientsCards = this.props.clients.map( client => {
            return <ClientCard
                clientId={client.id}
                clientName={client.name}
                clientIconUrl={client.iconUrl}
                clientDescription={client.description}
            />;
        });

        return (
            <div>
                { clientsCards }
            </div>
        );
    }

    componentDidMount() {
        this.props.fetchClients();
    }

}

ClientsListConnected.propTypes = {
    fetchClients: PropTypes.func.isRequired,
    fetched: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
    failed: PropTypes.bool,
    clients: PropTypes.arrayOf(PropTypes.object).isRequired
};

const mapStateToProps = state => {
    const { fetching, fetched, failed, clients } = state.clients;

    return { fetching, fetched, failed, clients };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ fetchClients }, dispatch)
);

let ClientList = connect(mapStateToProps, mapDispatchToProps)(ClientsListConnected);

export { ClientList };