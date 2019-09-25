import * as React from 'react';
import * as Redux from 'react-redux';
import * as BS from 'react-bootstrap';
import ReactDOM from 'react-dom';

import { rootBlur } from 'src/redux/action/styles';

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

  const renderModal = React.useMemo(
    () => (
      <BS.Modal.Dialog>
        <BS.Modal.Header className="pt-2 pb-2" closeButton onHide={onHide}>
          {renderHeader}
        </BS.Modal.Header>
        <BS.Modal.Body>{renderBody}</BS.Modal.Body>
        {footer && (
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
        )}
      </BS.Modal.Dialog>
    ),
    [footer, onCloseHide, onHide, onOkHide, renderBody, renderHeader],
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
    reduxDispatch(rootBlur(true));
    return () => {
      reduxDispatch(rootBlur(false));
      modalRoot.removeChild(elCurrent);
    };
  }, [reduxDispatch]);

  return ReactDOM.createPortal(renderModal, el.current);
}
