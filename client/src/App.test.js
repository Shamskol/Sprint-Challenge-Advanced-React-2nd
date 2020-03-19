import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';



test("renders App header", () => {
//Arrange
const {getByText} = render (<App/>);

//Act
const header = getByText(/We Welcome The World/i);
//Assert
expect(header);

});


