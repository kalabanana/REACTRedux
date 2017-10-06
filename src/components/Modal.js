import React from 'react';

export default class Modal extends React.Component {
    render() {
        if (this.props.isOpen === false) return null;
        return (
            <div>
                <div className="modals">
                    {this.props.children}
                </div>
                <div className="backdropStyle" onClick={e => this.close(e)} />

            </div>
        );
    }

    close(e) {
        this.props.onClose();
    }
}