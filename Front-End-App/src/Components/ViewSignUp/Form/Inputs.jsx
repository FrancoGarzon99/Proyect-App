import React from 'react';
import {
  Button,
  Input,
  InputLeftElement,
  InputRightElement,
  InputGroup,
  Icon,
} from '@chakra-ui/core';
import { BiUserCircle, BiEnvelope, BiShow, BiHide, BiLockAlt } from 'react-icons/bi';

// Component
const Inputs = ({ onForm }) => {
  // state ShowHiden
  const [showHiden, setShowHiden] = React.useState(false);
  //   Fn
  const viewPass = () => {
    setShowHiden(!showHiden);
  };

  //   Render
  return (
    <>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<Icon as={BiUserCircle} color="gray.300" />}
          p={6}
        />
        <Input
          type="text"
          name="usuario"
          placeholder="Usuario"
          size="lg"
          boxShadow="base"
          onChange={onForm}
        />
      </InputGroup>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<Icon as={BiEnvelope} color="gray.300" />}
          p={6}
        />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          size="lg"
          boxShadow="base"
          isRequired
          onChange={onForm}
        />
      </InputGroup>

      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<Icon as={BiLockAlt} color="gray.300" />}
          p={6}
        />
        <Input
          type={showHiden ? 'text' : 'password'}
          placeholder="Contraseña"
          boxShadow="base"
          size="lg"
          name="password"
          onChange={onForm}
          isRequired
        />
      </InputGroup>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<Icon as={BiLockAlt} color="gray.300" />}
          p={6}
        />
        <Input
          type={showHiden ? 'text' : 'password'}
          placeholder="Confimar contraseña"
          boxShadow="base"
          size="lg"
          name="passwordConfirm"
          onChange={onForm}
          isRequired
        />
        <InputRightElement p={6}>
          <Button h="1.7rem" size="md" onClick={viewPass} variant="ghost">
            {showHiden ? <Icon as={BiHide} /> : <Icon as={BiShow} />}
          </Button>
        </InputRightElement>
      </InputGroup>
    </>
  );
};

export default Inputs;
