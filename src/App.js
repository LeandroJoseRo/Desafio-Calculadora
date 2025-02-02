
import { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import { Container, Content, Row } from "./styles";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  }
  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`);
  }

  const handleSumNumbers = () => {

    if (firstNumber === '0'){
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('+');
    }else {
      const sum = Number(firstNumber) + Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
      setFirstNumber('0')
    }
  }

  const handleMinusNumbers = () => {

    if (firstNumber ==='0'){
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('-');
    }else {
      const minus = Number(firstNumber) - Number(currentNumber)
      setCurrentNumber(String(minus))
      setOperation('')
      setFirstNumber('0')
    }

  }

  const handleMultiplyNumbers = () => {
  
    if (firstNumber === '0'){
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('*');
    }else {
      const multiply = Number(firstNumber) * Number(currentNumber)
      setCurrentNumber(String(multiply))
      setOperation('')
      setFirstNumber('0')
    }
  }

  const handleDivideNumbers = () => {

    if (firstNumber === '0'){
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('/');
    }else {
      const divide = Number(firstNumber) / Number(currentNumber)
      setCurrentNumber(String(divide))
      setOperation('')
      setFirstNumber('0')
    }
  }

  const handlePoint = () => {

      const poit = currentNumber + '.'
      setCurrentNumber(String(poit))

  }

  const handleEquals = () => {

    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      switch(operation){
        case '+':
          handleSumNumbers()
          break;
        case '-':
          handleMinusNumbers()
          break;
        case '*':
          handleMultiplyNumbers()
          break;
        case '/':
          handleDivideNumbers()
          break;
        default:
          break;
      }
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="X" onClick={handleMultiplyNumbers}/>
          <Button label="/" onClick={handleDivideNumbers}/>
          <Button label="." onClick={handlePoint}/>
          <Button label="C" onClick={handleOnClear}/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="-" onClick={handleMinusNumbers}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="+" onClick={handleSumNumbers}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="=" onClick={handleEquals}/>
        </Row>
        <Row>
          <Button label="0" onClick={() => handleAddNumber('0')}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
