import * as React from 'react';
import * as Redux from 'react-redux';
import * as BS from 'react-bootstrap';
import ReactDOM from 'react-dom';

import { rootFilter } from 'src/redux/action/styles';

const modalRoot = document.getElementById('portal-root');

interface Props {
  renderHeader?: React.ReactNode;
  renderBody: React.ReactNode;
  footer?: {
    type?: 'closeOnly' | 'okAndClose';
    ok?: {
      label: string;
      onOk?: () => void;
    };
    close?: {
      label: string;
      onClose?: () => void;
    };
  };
  onHide: () => void;
}

export default function Modal({
  renderHeader,
  renderBody,
  footer,
  onHide,
}: Props) {
  const reduxDispatch = Redux.useDispatch();
  const el = React.useRef(document.createElement('div'));

  const onOkHide = React.useCallback(() => {
    if (footer && footer.ok && footer.ok.onOk) footer.ok.onOk();
    onHide();
  }, [footer, onHide]);

  const onCloseHide = React.useCallback(() => {
    if (footer && footer.close && footer.close.onClose) footer.close.onClose();
    onHide();
  }, [footer, onHide]);

  const modalHeader = React.useCallback(
    () => (
      <BS.Modal.Header className="pt-2 pb-2" closeButton onHide={onHide}>
        {renderHeader}
      </BS.Modal.Header>
    ),
    [onHide, renderHeader],
  );

  const modalBody = React.useCallback(
    () => <BS.Modal.Body>{renderBody}</BS.Modal.Body>,
    [renderBody],
  );

  const modalFooter = React.useCallback(() => {
    if (footer) {
      return (
        <BS.Modal.Footer>
          {footer.type !== 'closeOnly' && (
            <BS.Button variant="primary" size="sm" onClick={onOkHide}>
              {(footer.ok && footer.ok.label) || 'Ok'}
            </BS.Button>
          )}
          <BS.Button variant="secondary" size="sm" onClick={onCloseHide}>
            {(footer.close && footer.close.label) || 'Close'}
          </BS.Button>
        </BS.Modal.Footer>
      );
    }
  }, [footer, onCloseHide, onOkHide]);

  const renderModal = React.useCallback(
    () => (
      <BS.Modal.Dialog>
        {modalHeader()}
        {modalBody()}
        {modalFooter()}
      </BS.Modal.Dialog>
    ),
    [modalBody, modalFooter, modalHeader],
  );

  React.useEffect(() => {
    const elCurrent = el.current;
    const { style } = elCurrent;
    style.position = 'absolute';
    style.width = '100%';
    style.height = '100%';
    style.left = '0';
    style.top = '0';

    modalRoot.appendChild(elCurrent);
    reduxDispatch(rootFilter(true));
    return () => {
      reduxDispatch(rootFilter(false));
      modalRoot.removeChild(elCurrent);
    };
  }, [reduxDispatch]);

  return ReactDOM.createPortal(renderModal(), el.current);
}
