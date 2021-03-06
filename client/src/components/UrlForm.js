import React, { useState } from 'react';

import { loadPage } from '../api/loadPage';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';

const UrlForm = ({ setData, data }) => {
  const [input, setInput] = useState('');
  const [fetchingData, setFetchingData] = useState(false);

  const handleSubmit = async e => {
    if (input) {
      e.preventDefault();
      setData('');
      setInput('');
      let result = await loadPage(input);
      setData(result);
    }
  };

  function successButtonClick() {
    var elmnt = document.getElementById('scroll_target_1');
    elmnt.scrollIntoView({ behavior: 'smooth' });
    setFetchingData(false);
  }

  function renderSuccessButton() {
    return fetchingData ? (
      <div style={{ textAlign: 'center', marginTop: '150px' }}>
        {data ? (
          <Button
            style={{ fontSize: '1.3rem' }}
            className='shadow'
            variant='success'
            onClick={() => successButtonClick()}
            block
          >
            Success! Next!
          </Button>
        ) : (
          <Spinner animation='border' variant='primary' />
        )}
      </div>
    ) : (
      <></>
    );
  }

  return (
    <Container
      style={{
        /*backgroundColor: "black",*/ padding: '130px 130px 340px 130px',
        height: '100vh'
      }}
    >
      <h1
        style={{ marginBottom: '30px', fontSize: '4rem' }}
        className='text-center'
      >
        A Pager
      </h1>
      <Form
        onSubmit={e => {
          setFetchingData(true);
          handleSubmit(e);
        }}
      >
        <Form.Group controlId='formUrl'>
          <Form.Control
            style={{ fontSize: '1.3rem' }}
            type='url'
            placeholder='Enter URL here'
            size='lg'
            value={input}
            onChange={e => setInput(e.target.value)}
          />
        </Form.Group>
        <Button
          style={{ fontSize: '1.3rem' }}
          variant='primary'
          size='lg'
          type='submit'
          className='shadow'
          block
        >
          Simplify
        </Button>
      </Form>

      {renderSuccessButton()}
    </Container>
  );
};

export default UrlForm;
