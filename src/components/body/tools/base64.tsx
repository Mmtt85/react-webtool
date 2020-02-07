import * as React from 'react';
import * as BS from 'react-bootstrap';

export default function Base64() {
  const [message, setMessage] = React.useState('');
  const [result, setResult] = React.useState('');
  const encode = () => {
    setResult(btoa(message));
  };
  const decode = () => {
    setResult(atob(message));
  };

  return (
    <div>
      <h3>base64 Encoder / Decoder</h3>
      <BS.Form.Group controlId="exampleForm.ControlTextarea1">
        <BS.Form.Label>Target Message</BS.Form.Label>
        <BS.Form.Control
          type="text"
          onChange={({ target }) => setMessage(target.value)}
        />
      </BS.Form.Group>
      <BS.Button onClick={encode}>Encode</BS.Button>
      <BS.Button onClick={decode}>Decode</BS.Button>
      <BS.Form.Group>
        <BS.Form.Label>Result</BS.Form.Label>
        <div>{result}</div>
      </BS.Form.Group>
    </div>
  );
}
